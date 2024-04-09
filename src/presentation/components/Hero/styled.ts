import styled from "@emotion/styled";

interface SuccessMessageProps {
  isProfileCompleted: boolean;
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
  border-bottom: 1px solid ${({ theme }) => theme.color.light.shadeLighter};
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const SuccessMessage = styled.span<SuccessMessageProps>`
  color: ${({ theme, isProfileCompleted }) =>
    isProfileCompleted ? theme.color.blue.default : theme.color.red.glass};
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
  background-color: ${({ theme }) => theme.color.medium.default};
`;

export const ProgressBarFilled = styled.div`
  width: 64px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.green.default};
`;

export const ProgressItem = styled.div``;

export const GlobalProgress = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
