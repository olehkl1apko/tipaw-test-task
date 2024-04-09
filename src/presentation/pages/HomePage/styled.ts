import styled from "@emotion/styled";

export const PageContainer = styled.div`
  font-family: ${({ theme }) => theme.font.default};
  background-color: ${({ theme }) => theme.color.light.bg};
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px 24px 24px;
  gap: 48px;
`;
