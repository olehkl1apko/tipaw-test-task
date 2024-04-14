import { FC, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useUserContext } from "../../../application/context";
import { currentLanguage, progressCardList } from "../../helpers";
import { resources } from "../../../i18n/translate";

const Announcements: FC = () => {
  const { userFromDB } = useUserContext();
  const theme = useTheme();
  const { t } = useTranslation();
  const [isFullProgress, setIsFullProgress] = useState(false);

  const announcementList =
    resources[currentLanguage()].translation.announcementList;

  const [expandedAnnouncements, setExpandedAnnouncements] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    announcementList.forEach((announcement) => {
      initialExpandedState[announcement.id] = false;
    });
    setExpandedAnnouncements(initialExpandedState);
  }, [announcementList]);

  useEffect(() => {
    if (userFromDB) {
      const globalProgress = progressCardList(userFromDB, t).globalProgress;
      setIsFullProgress(globalProgress === 100);
    }
  }, [t, userFromDB]);

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
          {announcementList.map((announcement) => (
            <Styled.ArticleWrapper
              key={announcement.id}
              onClick={() => toggleAnnouncement(announcement.id)}
            >
              <Styled.ArticleHeader>
                <Styled.ArticleTitle>{announcement.title}</Styled.ArticleTitle>
                <BiChevronDown
                  size={24}
                  fill={theme.color.light.default}
                  style={{
                    transform: expandedAnnouncements[announcement.id]
                      ? ""
                      : "rotate(180deg)",
                  }}
                />
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
        <Styled.NotFullProgress>{t("completeProfile")}</Styled.NotFullProgress>
      )}
    </Styled.Container>
  );
};

export default Announcements;
