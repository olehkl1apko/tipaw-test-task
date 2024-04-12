import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import PetProfile from "./PetProfile";

const Profile: FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <Styled.Container>
          <PetProfile />
        </Styled.Container>
      )}
    </>
  );
};

export default Profile;
