import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "./theme";
const HomePage = lazy(() => import("../presentation/pages/HomePage"));
const Profile = lazy(() => import("../presentation/pages/Profile"));
const Logout = lazy(() => import("../presentation/pages/Logout"));

export const AppController: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/logout"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Logout />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
