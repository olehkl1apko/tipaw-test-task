import { FC, useState } from "react";
import { BiBell, BiChevronDown } from "react-icons/bi";
import moment from "moment";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/api/useGetProfile";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <Styled.ChevronButton onClick={() => setIsOpen(!isOpen)}>
            <BiChevronDown size={24} />
            {isOpen && (
              <Styled.Modal>
                <p>Profile</p>
                <p>Logout</p>
              </Styled.Modal>
            )}
          </Styled.ChevronButton>
        </Styled.UserInfo>
      </Styled.Navbar>
    </Styled.HeaderContainer>
  );
};

export default Header;
