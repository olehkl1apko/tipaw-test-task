import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.default};
  background-color: ${({ theme }) => theme.color.light.bg};
`;

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
