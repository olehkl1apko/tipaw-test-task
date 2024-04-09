import { createRoot } from "react-dom/client";

import { AppController } from "./application";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AppController />
);
