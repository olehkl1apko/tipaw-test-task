import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "./theme";
const HomePage = lazy(() => import("../presentation/pages/HomePage"));

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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
