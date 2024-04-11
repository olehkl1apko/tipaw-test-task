import * as Styled from "./styled";

type Props = {
  length: number;
  globalProgress: number;
};

const ProgressBars = ({ length, globalProgress }: Props) => {
  const progressBars = Array.from({ length }, (_, index) => {
    const shouldFill = index < Math.ceil(globalProgress / 25);
    const ProgressBarComponent = shouldFill
      ? Styled.ProgressBarFilled
      : Styled.ProgressBar;
    return <ProgressBarComponent key={index} />;
  }).reverse();

  return <Styled.ProgressBarWrapper>{progressBars}</Styled.ProgressBarWrapper>;
};

export default ProgressBars;
