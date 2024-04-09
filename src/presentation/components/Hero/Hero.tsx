import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "@emotion/react";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/pages/HomePageController/api/useGetProfile";

const Hero: FC = () => {
  const { profile } = useGetProfile();
  const theme = useTheme();
  const isProfileCompleted = profile.globalProgress === 100;

  const progressBars = Array.from({ length: 5 }, (_, index) => {
    const shouldFill = index < Math.ceil(profile.globalProgress / 20);

    if (shouldFill) {
      return <Styled.ProgressBarFilled key={index} />;
    } else {
      return <Styled.ProgressBar key={index} />;
    }
  }).reverse();

  return (
    <Styled.HeroWrapper>
      <Styled.CompletedWrapper>
        {isProfileCompleted && (
          <Styled.Notification>
            <Styled.SuccessMessage isProfileCompleted={isProfileCompleted}>
              You successfully complete your profile at Tipaw.
            </Styled.SuccessMessage>
            <Styled.Message>Now you can use Tipaw for 100% 🎉 </Styled.Message>
          </Styled.Notification>
        )}
        {!isProfileCompleted && (
          <Styled.Notification>
            <Styled.SuccessMessage isProfileCompleted={isProfileCompleted}>
              You have not complete your profile yet.
            </Styled.SuccessMessage>
            <Styled.Message>And can NOT use Tipaw for 100% </Styled.Message>
          </Styled.Notification>
        )}
        <Styled.ProgressWrapper>
          <Styled.TextWrapper>
            <Styled.Text>Profile Completed</Styled.Text>
            <Styled.Percentage>{profile.globalProgress}%</Styled.Percentage>
          </Styled.TextWrapper>
          <Styled.ProgressBarWrapper>{progressBars}</Styled.ProgressBarWrapper>
        </Styled.ProgressWrapper>
      </Styled.CompletedWrapper>
      <Styled.ProgressContainer>
        <Styled.ProgressItem>
          Verification : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Profile picture : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Parents : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Litter : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
      </Styled.ProgressContainer>
    </Styled.HeroWrapper>
  );
};

export default Hero;
