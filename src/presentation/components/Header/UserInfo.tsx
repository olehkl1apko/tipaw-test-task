import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const UserInfo: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user, logout } = useAuth0();

  return (
    <>
      <BiBell size={24} />
      <Styled.UserInfo>
        <Styled.UserPhoto>
          <img src={user?.picture} alt={user?.name} />
        </Styled.UserPhoto>
        <Styled.UserName>{user?.name}</Styled.UserName>
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
