import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../application/context";

const UserInfo: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logout } = useAuth0();
  const { userFromDB } = useUserContext();

  return (
    <>
      <BiBell size={24} />
      <Styled.UserInfo>
        <Styled.UserPhoto>
          <img src={userFromDB?.avatar} alt={userFromDB?.name} />
        </Styled.UserPhoto>
        <Styled.UserName>{userFromDB?.name}</Styled.UserName>
        <Styled.ChevronButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <BiChevronDown size={24} />
        </Styled.ChevronButton>
        {isOpenMenu && (
          <Styled.Modal>
            <button onClick={() => navigate("./profile")}>
              {t("profile")}
            </button>
            <button onClick={() => logout()}>{t("logout")}</button>
          </Styled.Modal>
        )}
      </Styled.UserInfo>
    </>
  );
};

export default UserInfo;
