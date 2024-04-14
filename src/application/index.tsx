import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC, lazy, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Layout } from "../presentation/components";
import { loginUser } from "./api/loginUser";
import { useUserContext } from "./context";
import { Error, LoadingFallback } from "../presentation/components";
const HomePage = lazy(() => import("../presentation/pages/HomePage"));
const ProfilePage = lazy(() => import("../presentation/pages/ProfilePage"));

export const AppController: FC = () => {
  const { user } = useAuth0();
  const { setUserFromDB } = useUserContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (user) {
      setLoading(true);
      setError(null);

      loginUser({
        name: user.nickname || "",
        email: user.email || "",
        avatar: user.picture || "",
        verified: user.email_verified || false,
      })
        .then((res) => {
          setUserFromDB(res);
          setLoading(false);
        })
        .catch((error: any) => {
          setError("Failed to fetch user data => " + error);
          setLoading(false);
        });
    }
  }, [setUserFromDB, user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  if (loading) return <LoadingFallback />;
  if (error) return <Error />;

  return <RouterProvider router={router} />;
};
