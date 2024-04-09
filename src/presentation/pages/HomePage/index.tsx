import { FC } from "react";

import { HomePageProps } from "./types";
import * as Styled from "./styled";
import { Header, Hero } from "../../components";

export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements } = props;

  return (
    <Styled.PageWrapper>
      <Header />
      <Hero />
      <Styled.AnnouncementsContainer>
        Announcements from TIPAW
        {announcements.map((announcement) => (
          <Styled.AnnouncementsContainer key={announcement.id}>
            <div>{announcement.title}</div>
            <div>{announcement.content}</div>
            <div>{announcement.date}</div>
          </Styled.AnnouncementsContainer>
        ))}
      </Styled.AnnouncementsContainer>
    </Styled.PageWrapper>
  );
};
