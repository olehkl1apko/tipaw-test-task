import { FaCheck } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTheme } from "@emotion/react";

import * as Styled from "./styled";
import { ProgressList } from "./Hero";

type Props = {
  progressList: ProgressList[];
};

const ProgressCard = ({ progressList }: Props) => {
  const theme = useTheme();

  return (
    <Styled.ProgressContainer>
      {progressList.map(
        ({ id, title, descriptionIfFill, descriptionIfEmpty, isCompleted }) => (
          <Styled.ProgressItem key={id}>
            <Styled.CheckWrapper isCompleted={isCompleted}>
              {isCompleted ? (
                <FaCheck color={theme.color.light.default} />
              ) : (
                <AiOutlineCloseCircle color={theme.color.light.default} />
              )}
            </Styled.CheckWrapper>
            <Styled.ItemTitle>{title}</Styled.ItemTitle>
            <Styled.ItemDescription>
              {isCompleted ? descriptionIfFill : descriptionIfEmpty}
            </Styled.ItemDescription>
          </Styled.ProgressItem>
        )
      )}
    </Styled.ProgressContainer>
  );
};

export default ProgressCard;
