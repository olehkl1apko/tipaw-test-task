import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import PetProfile from "./PetProfile";
import Parents from "./Parents";
import Litter from "./Litter";
import Photos from "./Photos";

const Profile: FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <Styled.Container>
          <PetProfile />
          <Parents />
          <Photos />
          <Litter />
        </Styled.Container>
      )}
    </>
  );
};

export default Profile;
