import styled from "@emotion/styled";

interface ContentWrapperProps {
  expanded: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 24px;
  border: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.blue.default};
  font-size: 18px;
  font-weight: 600;
  line-height: 2;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.red.default};
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  border-left: 1px solid ${({ theme }) => theme.color.blue.default};
  border-right: 1px solid ${({ theme }) => theme.color.blue.default};
  border-bottom: 1px solid ${({ theme }) => theme.color.blue.default};
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? "1000px" : "0")};
`;

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.color.blue.default};
  border-radius: 8px 8px 0px 0px;
`;

export const ArticleTitle = styled.h4`
  color: ${({ theme }) => theme.color.light.default};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const ChevronButton = styled.button``;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
`;

export const DateTitle = styled.h6`
  color: ${({ theme }) => theme.color.blue.default};
  font-size: 7px;
  font-weight: 400;
  line-height: 2.3;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.medium.shade};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 0px 24px 16px 24px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const NotFullProgress = styled.h2`
  color: ${({ theme }) => theme.color.purple.default};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;
