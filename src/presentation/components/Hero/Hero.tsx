import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/api/useGetProfile";

const Hero: FC = () => {
  const { profile } = useGetProfile();
  const theme = useTheme();
  const { t } = useTranslation();

  const isProfileCompleted = profile.globalProgress === 100;

  const progressBars = Array.from({ length: 5 }, (_, index) => {
    const shouldFill = index < Math.ceil(profile.globalProgress / 20);

    if (shouldFill) {
      return <Styled.ProgressBarFilled key={index} />;
    } else {
      return <Styled.ProgressBar key={index} />;
    }
  }).reverse();

  const progressList = [
    {
      id: 1,
      title: t("verification"),
      description: t("verificationDescription"),
    },
    {
      id: 2,
      title: t("profilePicture"),
      description: t("profilePictureDescription"),
    },
    { id: 3, title: t("parents"), description: t("parentsDescription") },
    { id: 4, title: t("litter"), description: t("litterDescription") },
  ];
  return (
    <Styled.HeroWrapper>
      {/* <ul>
        {Object.keys(user).map((objKey, i) => (
          <li key={i}>
            {objKey}: {user[objKey]}{" "}
          </li>
        ))}
      </ul> */}
      <Styled.CompletedWrapper>
        {isProfileCompleted && (
          <Styled.Notification>
            <Styled.SuccessMessage isProfileCompleted={isProfileCompleted}>
              {t("successCompletionMessage")}
            </Styled.SuccessMessage>
            <Styled.Message>{t("canUseTipaw")}</Styled.Message>
          </Styled.Notification>
        )}
        {!isProfileCompleted && (
          <Styled.Notification>
            <Styled.SuccessMessage isProfileCompleted={isProfileCompleted}>
              {t("incompleteProfileMessage")}
            </Styled.SuccessMessage>
            <Styled.Message>{t("cannotUseTipaw")}</Styled.Message>
          </Styled.Notification>
        )}
        <Styled.ProgressWrapper>
          <Styled.TextWrapper>
            <Styled.Text>{t("profileCompleted")}</Styled.Text>
            <Styled.Percentage>{profile.globalProgress}%</Styled.Percentage>
          </Styled.TextWrapper>
          <Styled.ProgressBarWrapper>{progressBars}</Styled.ProgressBarWrapper>
        </Styled.ProgressWrapper>
      </Styled.CompletedWrapper>
      <Styled.ProgressContainer>
        {progressList.map(({ id, title, description }) => (
          <Styled.ProgressItem key={id}>
            <Styled.CheckWrapper>
              <FaCheck color={theme.color.light.default} />
            </Styled.CheckWrapper>
            <Styled.ItemTitle>{title}</Styled.ItemTitle>
            <Styled.ItemDescription>{description}</Styled.ItemDescription>
          </Styled.ProgressItem>
        ))}
      </Styled.ProgressContainer>
    </Styled.HeroWrapper>
  );
};

export default Hero;
