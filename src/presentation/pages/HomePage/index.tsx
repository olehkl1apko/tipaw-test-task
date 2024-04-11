import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { Announcements, Hero, LoginReminder } from "../../components";
import { useUpdateVerify } from "../../../application/hooks";

export const HomePage: FC = () => {
  const { isAuthenticated, user } = useAuth0();
  // const { updatedUser } = useUpdateVerify(user);

  return (
    <>
      {isAuthenticated && user?.email ? (
        <Styled.PageWrapper>
          <Hero email={user?.email} />
          <Announcements />
        </Styled.PageWrapper>
      ) : (
        <LoginReminder />
      )}
    </>
  );
};

export default HomePage;
