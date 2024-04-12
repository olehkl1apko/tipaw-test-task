export const petSpecies = {
  en: [
    "Dogs",
    "Cats",
    "Birds",
    "Fish",
    "Hamsters",
    "Rabbits",
    "Guinea pigs",
    "Reptiles",
    "Another",
  ],
  fr: [
    "Chiens",
    "Chats",
    "Oiseaux",
    "Poissons",
    "Hamsters",
    "Lapins",
    "Cobayes",
    "Reptiles",
    "Un autre",
  ],
  nl: [
    "Honden",
    "Katten",
    "Vogels",
    "Vissen",
    "Hamsters",
    "Konijnen",
    "Cavia's",
    "Reptielen",
    "Een andere",
  ],
};

export type IAuthUser = {
  email: string;
  email_verified: boolean;
  family_name?: string;
  given_name?: string;
  locale?: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
};

export type IProfileUser = {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  commoninfoVerified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
  petCommonInfo: IPetProfile;
  petParents: IParents;
  petLitter: ILitter;
  photos: IPhotos;
};

export type IPetProfile = {
  petName: string;
  specie: string;
  age: number;
  gender: string;
  color: string;
  weight: number;
};

export type IParents = {
  father: string | null;
  fatherAwards: number | null;
  mother: string | null;
  motherAwards: number | null;
};

export type ILitter = {
  puppies: number | null;
  birthDate: Date | null;
};

export type IPhotos = string[];

export type IProgressList = {
  id: number;
  title: string;
  descriptionIfFill: string;
  descriptionIfEmpty: string;
  isCompleted: boolean;
};

export type IAnnouncementData = {
  id: string;
  title: string;
  date: string;
  content: string;
};
