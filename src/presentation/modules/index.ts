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

export const genders = {
  en: ["Male", "Female", "Another"],
  fr: ["Mâle", "Femelle", "Autre"],
  nl: ["Mannelijk", "Vrouwelijk", "Ander"],
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
  father: string;
  fatherAwards: number;
  mother: string;
  motherAwards: number;
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

export const announcements: IAnnouncementData[] = [
  {
    id: "0",
    title: "What is Tipaw ?",
    date: "04/04/2024",
    content:
      "At Tipaw, our mission is to enhance the well-being of animals through innovative digital solutions that connect (future) animal owners, their pets, and animal professionals. Originating from a need to address dog-breeding abuse, we’ve created a platform that facilitates connections between responsible dog breeders and prospective dog owners. Our vision has expanded to include a new platform that connects our community of animal lovers with veterinarians and groomers, offering an online presence and booking services. Every member of our team is committed to making a significant impact, driven by innovation and authenticity, to support the values at the heart of our project.",
  },
  {
    id: "1",
    title: "Choosing the Right Pet for Your Lifestyle",
    date: "04/05/2024",
    content:
      "Selecting the perfect pet goes beyond mere preference; it requires consideration of your lifestyle, living space, and activity level. Whether you opt for a dog, cat, bird, or something more exotic, understanding your commitment and compatibility is crucial. This article explores how to match your lifestyle with the right pet, ensuring a harmonious and fulfilling relationship for both you and your new companion.",
  },

  {
    id: "2",
    title: "The Importance of Regular Veterinary Check-Ups",
    date: "04/06/2024",
    content:
      "Regular veterinary check-ups are paramount to ensuring the health and well-being of your beloved pet. These routine visits not only detect underlying health issues early but also provide an opportunity for preventive care. From vaccinations to dental exams, this article highlights the significance of scheduling regular check-ups with your veterinarian to keep your furry friend happy and healthy for years to come.",
  },

  {
    id: "3",
    title: "Creating a Safe Environment for Your Pet at Home",
    date: "04/07/2024",
    content:
      "Your home should be a haven for your pet, free from hazards and dangers. From toxic plants to electrical cords, there are numerous potential threats lurking in everyday household items. This article offers practical tips and advice on how to create a safe environment for your pet, ensuring their well-being and peace of mind for you as a pet owner.",
  },

  {
    id: "4",
    title: "Understanding Pet Nutrition: A Guide for Pet Owners",
    date: "04/08/2024",
    content:
      "Proper nutrition is fundamental to your pet's overall health and longevity. However, navigating the world of pet food can be overwhelming, with countless options available on the market. This article breaks down the basics of pet nutrition, including essential nutrients, dietary requirements, and deciphering pet food labels. Armed with this knowledge, pet owners can make informed decisions to provide their furry companions with optimal nutrition.",
  },

  {
    id: "5",
    title: "The Benefits of Regular Exercise for Pets",
    date: "04/10/2024",
    content:
      "Just like humans, pets require regular exercise to maintain their physical and mental well-being. From daily walks to interactive play sessions, physical activity is essential for preventing obesity, alleviating boredom, and strengthening the bond between you and your pet. This article explores the benefits of regular exercise for pets and offers practical tips on how to incorporate fun and stimulating activities into your pet's daily routine.",
  },
];
