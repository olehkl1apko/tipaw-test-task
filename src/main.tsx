import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import "./i18n/i18n";
import { AppController } from "./application";

const CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-3r4fnqhzmp85fa02.us.auth0.com"
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppController />
  </Auth0Provider>
);
