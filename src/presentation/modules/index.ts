export const pets = {
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

export const occupations = {
  en: [
    "Doctor",
    "Teacher",
    "Engineer",
    "Artist",
    "Chef",
    "Athlete",
    "Writer",
    "Musician",
    "Another",
  ],
  fr: [
    "Médecin",
    "Enseignant",
    "Ingénieur",
    "Artiste",
    "Chef",
    "Athlète",
    "Écrivain",
    "Musicien",
    "Un autre",
  ],
  nl: [
    "Dokter",
    "Leraar",
    "Ingenieur",
    "Artiest",
    "Chef-kok",
    "Atleet",
    "Schrijver",
    "Muzikant",
    "Een andere",
  ],
};

export type ProfileUser = {
  name: string;
  avatar: string;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
};

export type AuthUser = {
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

export type PersonalData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  occupation: string;
  avatar: File | null;
};

export type ProgressList = {
  id: number;
  title: string;
  descriptionIfFill: string;
  descriptionIfEmpty: string;
  isCompleted: boolean;
};

export type AnnouncementData = {
  id: string;
  title: string;
  date: string;
  content: string;
};
