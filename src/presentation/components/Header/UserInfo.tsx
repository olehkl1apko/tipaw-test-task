import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../../application/hooks/useGetUser";

type Props = {
  email: string;
};

const UserInfo: FC<Props> = ({ email }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logout } = useAuth0();
  const { data } = useGetUser(email);

  return (
    <>
      <BiBell size={24} />
      <Styled.UserInfo>
        <Styled.UserPhoto>
          <img src={data?.avatar} alt={data?.name} />
        </Styled.UserPhoto>
        <Styled.UserName>{data?.name}</Styled.UserName>
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
