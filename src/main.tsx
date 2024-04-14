import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import "./index.css";
import "./i18n/i18n";
import { AppController } from "./application";
import { AuthProvider } from "./application/auth";
import { UserProvider } from "./application/context";
import { theme } from "./application/theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <UserProvider>
        <AppController />
      </UserProvider>
    </AuthProvider>
  </ThemeProvider>
);
