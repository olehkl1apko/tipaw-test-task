import { FC, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { announcements } from "../../modules";
import { useUserContext } from "../../../application/context";
import { progressCardList } from "../../helpers";

const Announcements: FC = () => {
  const { userFromDB } = useUserContext();
  const theme = useTheme();
  const { t } = useTranslation();
  const [isFullProgress, setIsFullProgress] = useState(false);

  const [expandedAnnouncements, setExpandedAnnouncements] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    announcements.forEach((announcement) => {
      initialExpandedState[announcement.id] = false;
    });
    setExpandedAnnouncements(initialExpandedState);
  }, []);

  useEffect(() => {
    if (userFromDB) {
      const globalProgress = progressCardList(userFromDB, t).globalProgress;
      setIsFullProgress(globalProgress === 100);
    }
  }, []);

  const toggleAnnouncement = (id: string) => {
    setExpandedAnnouncements((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Styled.Container>
      {isFullProgress && (
        <>
          <Styled.TitleWrapper>
            <Styled.Title>{t("announcements")}</Styled.Title>
            <Styled.Dot></Styled.Dot>
          </Styled.TitleWrapper>
          {announcements.map((announcement) => (
            <Styled.ArticleWrapper key={announcement.id}>
              <Styled.ArticleHeader>
                <Styled.ArticleTitle>{announcement.title}</Styled.ArticleTitle>
                <Styled.ChevronButton
                  onClick={() => toggleAnnouncement(announcement.id)}
                >
                  <BiChevronDown
                    size={24}
                    fill={theme.color.light.default}
                    style={{
                      transform: expandedAnnouncements[announcement.id]
                        ? ""
                        : "rotate(180deg)",
                    }}
                  />
                </Styled.ChevronButton>
              </Styled.ArticleHeader>
              <Styled.ContentWrapper
                expanded={expandedAnnouncements[announcement.id]}
              >
                <Styled.Date>
                  <FaCalendarAlt size={16} fill={theme.color.blue.default} />
                  <Styled.DateTitle>
                    {moment(announcement.date, "MM/DD/YYYY").format("DD MMMM")}
                  </Styled.DateTitle>
                </Styled.Date>
                <Styled.Content>{announcement.content}</Styled.Content>
              </Styled.ContentWrapper>
            </Styled.ArticleWrapper>
          ))}
        </>
      )}
      {!isFullProgress && (
        <Styled.NotFullProgress>
          Complete your pet's profile 100% and get access to useful tips on
          caring for and raising your pet here
        </Styled.NotFullProgress>
      )}
    </Styled.Container>
  );
};

export default Announcements;
