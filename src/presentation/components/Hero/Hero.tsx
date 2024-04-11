import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import { useGetUser } from "../../../application/hooks";
import Error from "../Error";
import LoadingFallback from "../LoadingFallback";
import ProgressBars from "./ProgressBars";

type Props = {
  email: string;
};

const Hero: FC<Props> = ({ email }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { data, error, isPending } = useGetUser(email);

  const progressList = [
    {
      id: 1,
      title: t("verification"),
      description: t("verificationDescription"),
      isCompleted: data?.verified || false,
    },
    {
      id: 2,
      title: t("profilePicture"),
      description: t("profilePictureDescription"),
      isCompleted: data?.profilePictureIsVerified || false,
    },
    {
      id: 3,
      title: t("parents"),
      description: t("parentsDescription"),
      isCompleted: data?.parentsVerified || false,
    },
    {
      id: 4,
      title: t("litter"),
      description: t("litterDescription"),
      isCompleted: data?.litterVerified || false,
    },
  ];

  const isProfileCompleted = data?.globalProgress === 100;

  if (error) return <Error />;
  if (isPending) return <LoadingFallback />;

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
            <Styled.Percentage>{data?.globalProgress || 0}%</Styled.Percentage>
          </Styled.TextWrapper>
          <ProgressBars
            length={progressList.length}
            globalProgress={data?.globalProgress}
          />
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
              {isCompleted ? description : t("pleasefill")}
            </Styled.ItemDescription>
          </Styled.ProgressItem>
        ))}
      </Styled.ProgressContainer>
    </Styled.HeroWrapper>
  );
};

export default Hero;
