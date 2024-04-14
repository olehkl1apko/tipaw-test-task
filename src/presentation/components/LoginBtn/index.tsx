import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { useTranslation } from "react-i18next";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { t } = useTranslation();

  return (
    <Styled.Button onClick={() => loginWithRedirect()}>
      {t("login")}
    </Styled.Button>
  );
};

export default LoginButton;
