import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useGetProfile } from "../../../application/api/useGetProfile";

const Hero: FC = () => {
  const { profile } = useGetProfile();
  const theme = useTheme();
  const { t } = useTranslation();

  const isProfileCompleted = profile.globalProgress === 100;

  const progressBars = Array.from({ length: 4 }, (_, index) => {
    const shouldFill = index < Math.ceil(profile.globalProgress / 25);

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
      isCompleted: profile.verified,
    },
    {
      id: 2,
      title: t("profilePicture"),
      description: t("profilePictureDescription"),
      isCompleted: profile.profilePictureIsVerified,
    },
    {
      id: 3,
      title: t("parents"),
      description: t("parentsDescription"),
      isCompleted: profile.parentsVerified,
    },
    {
      id: 4,
      title: t("litter"),
      description: t("litterDescription"),
      isCompleted: profile.litterVerified,
    },
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
        {progressList.map(({ id, title, description, isCompleted }) => (
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
              {isCompleted
                ? description
                : "Please fill this info in you profile"}
            </Styled.ItemDescription>
          </Styled.ProgressItem>
        ))}
      </Styled.ProgressContainer>
    </Styled.HeroWrapper>
  );
};

export default Hero;
