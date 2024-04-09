import { FC } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import moment from "moment";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/api/useGetProfile";

const Header: FC = () => {
  const { profile } = useGetProfile();

  return (
    <Styled.HeaderContainer>
      <Styled.Logo>My Tipaw</Styled.Logo>
      <Styled.Navbar>
        <Styled.Weekday>
          <span>{moment().format("ddd")}</span>
          <Styled.Dot></Styled.Dot>
          <Styled.Nl>Nl</Styled.Nl>
        </Styled.Weekday>
        <BiBell size={24} />
        <Styled.UserInfo>
          <Styled.UserPhoto>
            <img src={profile.avatar} width="50px" alt="some guy with a dog" />
          </Styled.UserPhoto>
          <Styled.UserName>{profile.name}</Styled.UserName>
          <BiChevronDown size={24} />
        </Styled.UserInfo>
      </Styled.Navbar>
    </Styled.HeaderContainer>
  );
};

export default Header;
