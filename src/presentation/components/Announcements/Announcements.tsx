import { FC, Fragment, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import moment from "moment";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useGetAnnouncements } from "../../../application/api/useGetAnnouncements";

const Announcements: FC = () => {
  const { announcements } = useGetAnnouncements();
  const theme = useTheme();
  const { t } = useTranslation();

  const [expandedAnnouncements, setExpandedAnnouncements] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    announcements.forEach((announcement) => {
      initialExpandedState[announcement.id] = true;
    });
    setExpandedAnnouncements(initialExpandedState);
  }, [announcements]);

  const toggleAnnouncement = (id: string) => {
    setExpandedAnnouncements((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Styled.AnnouncementsContainer>
      <Styled.Wrapper>
        <Styled.Title>{t("announcements")}</Styled.Title>
        <Styled.Dot></Styled.Dot>
      </Styled.Wrapper>
      <Styled.AnnouncementContainer>
        {announcements.map((announcement) => (
          <Fragment key={announcement.id}>
            <Styled.Header>
              <Styled.HeaderTitle>{announcement.title}</Styled.HeaderTitle>
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
            </Styled.Header>
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
          </Fragment>
        ))}
      </Styled.AnnouncementContainer>
    </Styled.AnnouncementsContainer>
  );
};

export default Announcements;
