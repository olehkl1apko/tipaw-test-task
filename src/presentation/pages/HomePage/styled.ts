import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
  font-family: ${({ theme }) => theme.font.default};
  background-color: ${({ theme }) => theme.color.light.bg};
`;

export const ProgressItem = styled.div``;

export const GlobalProgress = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnnouncementsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
