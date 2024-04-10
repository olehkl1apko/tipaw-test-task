import { FC } from "react";
import PersonalInfo from "./PersonalInfo";

import * as Styled from "./styled";

const Profile: FC = () => {
  return (
    <Styled.Container>
      <PersonalInfo />
    </Styled.Container>
  );
};

export default Profile;
