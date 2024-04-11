import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import errorImg from "/error.png";

const Error = () => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Image src={errorImg} alt="Error Image" />
      <Styled.Text>{t("errorMsg")}</Styled.Text>
    </Styled.Container>
  );
};

export default Error;
