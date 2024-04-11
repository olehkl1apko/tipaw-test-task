import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../application/hooks";
import { AuthUser } from "../../modules";

type Props = {
  user: AuthUser;
};

const UserInfo: FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logout } = useAuth0();
  const { userFB, error, isPending } = useLogin({
    email: user?.email,
    name: user?.nickname,
    avatar: user?.picture,
  });

  if (error) return <Styled.Error>Authentication Error</Styled.Error>;
  if (isPending) return <Styled.Loading>Loading...</Styled.Loading>;

  return (
    <>
      <BiBell size={24} />
      <Styled.UserInfo>
        <Styled.UserPhoto>
          <img src={userFB?.avatar} alt={userFB?.name} />
        </Styled.UserPhoto>
        <Styled.UserName>{userFB?.name}</Styled.UserName>
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
