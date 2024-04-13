import { TFunction } from "i18next/typescript/t";
import { IProfileUser, IProgressList } from "../modules";

export const currentLanguage = () => {
  type CurrentLanguage = "fr" | "en" | "nl";

  const storedLanguage = localStorage.getItem("language") || "en";
  return storedLanguage as CurrentLanguage;
};

export const checkProperties = (obj: { [key: string]: any }): boolean => {
  for (const key in obj) {
    if (!obj[key] && obj[key] !== 0) {
      return false;
    }
  }
  return true;
};

export const progressCardList = (userFromDB: IProfileUser, t: TFunction) => {
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
      title: t("commoninfo"),
      descriptionIfFill: t("commoninfoDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.commoninfoVerified || false,
    },
    {
      id: 4,
      title: t("parents"),
      descriptionIfFill: t("parentsDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.parentsVerified || false,
    },
    {
      id: 5,
      title: t("litter"),
      descriptionIfFill: t("litterDescription"),
      descriptionIfEmpty: t("pleasefill"),
      isCompleted: userFromDB?.litterVerified || false,
    },
  ] as IProgressList[];

  const completedCards: number = list.filter((item) => item.isCompleted).length;
  const globalProgress: number = (completedCards / list.length) * 100;

  return { list, globalProgress };
};
