import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n/i18n";
import { AppController } from "./application";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AppController />
);
