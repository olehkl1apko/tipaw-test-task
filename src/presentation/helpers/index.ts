import { TFunction } from "i18next/typescript/t";
import { ProfileUser, ProgressList } from "../modules";

export const currentLanguage = () => {
  type CurrentLanguage = "fr" | "en" | "nl";

  const storedLanguage = localStorage.getItem("language") || "en";
  return storedLanguage as CurrentLanguage;
};

export const progressCardList = (userFromDB: ProfileUser, t: TFunction) => {
  const list = [
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
  ] as ProgressList[];

  const completedCards: number = list.filter((item) => item.isCompleted).length;
  const globalProgress: number = (completedCards / list.length) * 100;

  return { list, globalProgress };
};
