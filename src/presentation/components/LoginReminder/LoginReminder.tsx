import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import img from "/pleaseLogin.png";

const LoginReminder = () => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Image src={img} alt="Nice Image" />
      <Styled.Text>{t("loginReminder")}</Styled.Text>
    </Styled.Container>
  );
};

export default LoginReminder;
