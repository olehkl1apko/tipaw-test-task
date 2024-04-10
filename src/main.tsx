import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import "./index.css";
import "./i18n/i18n";
import { AppController } from "./application";
import AuthProvider from "./application/auth/AuthProvider";
import { theme } from "./application/theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AppController />
    </AuthProvider>
  </ThemeProvider>
);
