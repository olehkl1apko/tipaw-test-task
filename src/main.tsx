import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n/i18n";
import { AppController } from "./application";
import AuthProvider from "./application/auth/AuthProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <AppController />
  </AuthProvider>
);
