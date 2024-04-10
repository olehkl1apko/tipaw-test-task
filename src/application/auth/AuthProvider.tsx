import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;
const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
