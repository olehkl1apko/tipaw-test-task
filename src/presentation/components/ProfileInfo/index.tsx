import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import PetProfile from "./PetProfile";
import Parents from "./Parents";

const Profile: FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <Styled.Container>
          <PetProfile />
          <Parents />
        </Styled.Container>
      )}
    </>
  );
};

export default Profile;
