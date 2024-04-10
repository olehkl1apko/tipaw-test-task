import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as Styled from "./styled";
import { Announcements, Header, Hero, LoginReminder } from "../../components";

export const HomePage: FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Styled.PageContainer>
      <Header />
      {isAuthenticated && (
        <Styled.PageWrapper>
          <Hero />
          <Announcements />
        </Styled.PageWrapper>
      )}
      {!isAuthenticated && <LoginReminder />}
    </Styled.PageContainer>
  );
};

export default HomePage;
