import { FC, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import UserInfo from "./UserInfo";
import { LoginBtn } from "../LoginBtn";

const Header: FC = () => {
  const theme = useTheme();
  const { isAuthenticated, user } = useAuth0();
  const { t, i18n } = useTranslation();
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpenLanguage(false);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.Logo to="/">My Tipaw</Styled.Logo>
      <Styled.Navbar>
        <Styled.Today>
          {t("today")} {moment().format("DD.MM.YYYY")}
        </Styled.Today>
        <Styled.LanguageButton
          onClick={() => setIsOpenLanguage(!isOpenLanguage)}
        >
          <FaGlobe size={24} fill={theme.color.green.default} />
        </Styled.LanguageButton>
        {isOpenLanguage && (
          <Styled.ModalLanguage>
            <Styled.ModalLanguageBtn onClick={() => changeLanguage("en")}>
              English
            </Styled.ModalLanguageBtn>
            <Styled.ModalLanguageBtn onClick={() => changeLanguage("fr")}>
              Français
            </Styled.ModalLanguageBtn>
            <Styled.ModalLanguageBtn onClick={() => changeLanguage("nl")}>
              Nederlands
            </Styled.ModalLanguageBtn>
          </Styled.ModalLanguage>
        )}
        {isAuthenticated && user ? <UserInfo /> : <LoginBtn />}
      </Styled.Navbar>
    </Styled.HeaderContainer>
  );
};

export default Header;
