import { FC } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import ProgressBars from "./ProgressBars";
import { useUserContext } from "../../../application/context";
import ProgressCard from "./ProgressCard";

export type ProgressList = {
  id: number;
  title: string;
  descriptionIfFill: string;
  descriptionIfEmpty: string;
  isCompleted: boolean;
};

const Hero: FC = () => {
  const { t } = useTranslation();
  const { userFromDB } = useUserContext();

  const progressList: ProgressList[] = [
    {
      id: 1,
      title: t("verification"),
      descriptionIfFill: t("verificationDescription"),
      descriptionIfEmpty: t("pleaseVerify"),
      isCompleted: userFromDB?.verified || false,
    },
    {
      id: 2,
      title: t("profilePicture"),
      descriptionIfFill: t("profilePictureDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.profilePictureIsVerified || false,
    },
    {
      id: 3,
      title: t("parents"),
      descriptionIfFill: t("parentsDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.parentsVerified || false,
    },
    {
      id: 4,
      title: t("litter"),
      descriptionIfFill: t("litterDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.litterVerified || false,
    },
  ];

  const isProfileCompleted = userFromDB?.globalProgress === 100;

  return (
    <Styled.HeroWrapper>
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
            <Styled.Percentage>
              {userFromDB?.globalProgress || 0}%
            </Styled.Percentage>
          </Styled.TextWrapper>
          <ProgressBars
            length={progressList.length}
            globalProgress={userFromDB?.globalProgress || 0}
          />
        </Styled.ProgressWrapper>
      </Styled.CompletedWrapper>
      <ProgressCard progressList={progressList} />
    </Styled.HeroWrapper>
  );
};

export default Hero;
