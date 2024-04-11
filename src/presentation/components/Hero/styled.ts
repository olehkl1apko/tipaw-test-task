import styled from "@emotion/styled";

interface SuccessMessageProps {
  isProfileCompleted: boolean;
}

interface CheckWrapper {
  isCompleted: boolean;
}

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
`;

export const CompletedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  gap: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.light.shadeLighter};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const SuccessMessage = styled.h3<SuccessMessageProps>`
  color: ${({ theme, isProfileCompleted }) =>
    isProfileCompleted ? theme.color.blue.default : theme.color.red.default};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export const Message = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.medium.text};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.dark.text};
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.green.default};
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const ProgressBar = styled.div`
  width: 64px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.light.shade};

  @media screen and (max-width: 424px) {
    width: 48px;
  }
`;

export const ProgressBarFilled = styled.div`
  width: 64px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.green.default};

  @media screen and (max-width: 425px) {
    width: 48px;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 40px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 300px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
  box-shadow: -1px 3px 16px 0 ${({ theme }) => theme.color.medium.shadow};
`;

export const CheckWrapper = styled.p<CheckWrapper>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.color.green.default : theme.color.red.default};
`;

export const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.dark.text};
  margin-top: 16px;
`;

export const ItemDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.medium.shade};
  margin-top: 8px;
`;
