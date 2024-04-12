import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";
import ProgressBars from "./ProgressBars";
import { useUserContext } from "../../../application/context";
import ProgressCard from "./ProgressCard";
import { ProgressList } from "../../modules";
import { progressCardList } from "../../helpers";

const Hero: FC = () => {
  const { t } = useTranslation();
  const { userFromDB } = useUserContext();
  const [progressList, setProgressList] = useState<ProgressList[]>([]);
  const [globalProgress, setGlobalProgress] = useState<number>(0);
  const [isProfileCompleted, setIsProfileCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (userFromDB) {
      const progressList = progressCardList(userFromDB, t);
      setProgressList(progressList.list);
      setGlobalProgress(progressList.globalProgress);
      setIsProfileCompleted(progressList.globalProgress === 100);
    }
  }, [t, userFromDB]);

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
            <Styled.Percentage>{globalProgress || 0}%</Styled.Percentage>
          </Styled.TextWrapper>
          <ProgressBars
            length={progressList.length}
            globalProgress={globalProgress || 0}
          />
        </Styled.ProgressWrapper>
      </Styled.CompletedWrapper>
      <ProgressCard progressList={progressList} />
    </Styled.HeroWrapper>
  );
};

export default Hero;
