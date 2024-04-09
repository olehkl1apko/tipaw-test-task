import { FC } from "react";

import * as Styled from "./styled";
import { Announcements, Header, Hero } from "../../components";

export const HomePage: FC = () => {
  return (
    <Styled.PageContainer>
      <Header />
      <Styled.PageWrapper>
        <Hero />
        <Announcements />
      </Styled.PageWrapper>
    </Styled.PageContainer>
  );
};

export default HomePage;
