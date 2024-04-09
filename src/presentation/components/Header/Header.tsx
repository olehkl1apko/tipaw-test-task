import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/api/useGetProfile";

const Header: FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { profile } = useGetProfile();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpenLanguage(false);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.Logo>My Tipaw</Styled.Logo>
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
        <BiBell size={24} />
        <Styled.UserInfo>
          <Styled.UserPhoto>
            <img src={profile.avatar} alt="some guy with a dog" />
          </Styled.UserPhoto>
          <Styled.UserName>{profile.name}</Styled.UserName>
          <Styled.ChevronButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <BiChevronDown size={24} />
            {isOpenMenu && (
              <Styled.Modal>
                <p>{t("profile")}</p>
                <p>{t("settings")}</p>
                <p>{t("logout")}</p>
              </Styled.Modal>
            )}
          </Styled.ChevronButton>
        </Styled.UserInfo>
      </Styled.Navbar>
    </Styled.HeaderContainer>
  );
};

export default Header;
