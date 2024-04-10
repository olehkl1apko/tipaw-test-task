import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FC, lazy } from "react";

import { Layout } from "../presentation/components";
const HomePage = lazy(() => import("../presentation/pages/HomePage"));
const Profile = lazy(() => import("../presentation/pages/Profile"));

export const AppController: FC = () => {
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
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
