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

export const announcements = {
  en: [
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
  ] as IAnnouncementData[],
  fr: [
    {
      id: "0",
      title: "Qu'est-ce que Tipaw ?",
      date: "04/04/2024",
      content:
        "Chez Tipaw, notre mission est d'améliorer le bien-être des animaux grâce à des solutions numériques innovantes qui relient les propriétaires (futurs) d'animaux, leurs animaux de compagnie et les professionnels du monde animal. Issu de la nécessité de lutter contre les abus en matière d'élevage de chiens, nous avons créé une plateforme qui facilite les connexions entre les éleveurs de chiens responsables et les futurs propriétaires de chiens. Notre vision s'est élargie pour inclure une nouvelle plateforme qui relie notre communauté d'amoureux des animaux avec des vétérinaires et des toiletteurs, offrant une présence en ligne et des services de réservation. Chaque membre de notre équipe s'engage à avoir un impact significatif, guidé par l'innovation et l'authenticité, pour soutenir les valeurs au cœur de notre projet.",
    },
    {
      id: "1",
      title:
        "Choisir le bon animal de compagnie en fonction de votre style de vie",
      date: "04/05/2024",
      content:
        "Choisir le parfait animal de compagnie dépasse la simple préférence ; cela nécessite de prendre en compte votre style de vie, votre espace de vie et votre niveau d'activité. Que vous optiez pour un chien, un chat, un oiseau ou quelque chose de plus exotique, comprendre votre engagement et votre compatibilité est crucial. Cet article explore comment concilier votre style de vie avec le bon animal de compagnie, garantissant une relation harmonieuse et épanouissante pour vous et votre nouveau compagnon.",
    },
    {
      id: "2",
      title: "L'importance des bilans vétérinaires réguliers",
      date: "04/06/2024",
      content:
        "Les bilans vétérinaires réguliers sont primordiaux pour assurer la santé et le bien-être de votre animal de compagnie bien-aimé. Ces visites de routine permettent non seulement de détecter précocement les problèmes de santé sous-jacents, mais également de bénéficier de soins préventifs. Des vaccinations aux examens dentaires, cet article met en lumière l'importance de planifier des bilans réguliers avec votre vétérinaire pour maintenir votre ami à quatre pattes heureux et en bonne santé pour les années à venir.",
    },
    {
      id: "3",
      title:
        "Créer un environnement sûr pour votre animal de compagnie à la maison",
      date: "04/07/2024",
      content:
        "Votre maison doit être un havre de paix pour votre animal de compagnie, exempt de dangers et de menaces. Des plantes toxiques aux cordons électriques, de nombreux dangers potentiels se cachent dans les objets domestiques du quotidien. Cet article offre des conseils pratiques sur la manière de créer un environnement sûr pour votre animal de compagnie, garantissant son bien-être et votre tranquillité d'esprit en tant que propriétaire d'animal de compagnie.",
    },
    {
      id: "4",
      title:
        "Comprendre la nutrition des animaux de compagnie : un guide pour les propriétaires d'animaux de compagnie",
      date: "04/08/2024",
      content:
        "Une nutrition adéquate est fondamentale pour la santé et la longévité de votre animal de compagnie. Cependant, naviguer dans le monde de l'alimentation pour animaux de compagnie peut être déconcertant, avec d'innombrables options disponibles sur le marché. Cet article démystifie les bases de la nutrition des animaux de compagnie, y compris les nutriments essentiels, les besoins alimentaires et le décodage des étiquettes des aliments pour animaux de compagnie. Armés de ces connaissances, les propriétaires d'animaux de compagnie peuvent prendre des décisions éclairées pour fournir à leurs compagnons à quatre pattes une nutrition optimale.",
    },
    {
      id: "5",
      title:
        "Les bienfaits de l'exercice régulier pour les animaux de compagnie",
      date: "04/10/2024",
      content:
        "Tout comme les humains, les animaux de compagnie ont besoin d'exercice régulier pour maintenir leur bien-être physique et mental. Des promenades quotidiennes aux séances de jeu interactives, l'activité physique est essentielle pour prévenir l'obésité, combattre l'ennui et renforcer le lien entre vous et votre animal de compagnie. Cet article explore les bienfaits de l'exercice régulier pour les animaux de compagnie et offre des conseils pratiques sur la façon d'incorporer des activités amusantes et stimulantes dans la routine quotidienne de votre animal de compagnie.",
    },
  ] as IAnnouncementData[],
  nl: [
    {
      id: "0",
      title: "Wat is Tipaw?",
      date: "04/04/2024",
      content:
        "Bij Tipaw is onze missie om het welzijn van dieren te verbeteren door innovatieve digitale oplossingen die (toekomstige) eigenaren van dieren, hun huisdieren en professionals op het gebied van dieren met elkaar verbinden. Voortkomend uit de noodzaak om misbruik van hondenfokkerijen aan te pakken, hebben we een platform gecreëerd dat verbindingen mogelijk maakt tussen verantwoordelijke hondenfokkers en toekomstige hondeneigenaren. Onze visie is uitgebreid met een nieuw platform dat onze gemeenschap van dierenliefhebbers verbindt met dierenartsen en trimmers, met online aanwezigheid en boekingsdiensten. Elk lid van ons team is toegewijd om een ​​belangrijke impact te hebben, gedreven door innovatie en authenticiteit, om de waarden te ondersteunen die aan de basis liggen van ons project.",
    },
    {
      id: "1",
      title: "Kies het juiste huisdier voor uw levensstijl",
      date: "04/05/2024",
      content:
        "Het kiezen van het perfecte huisdier gaat verder dan louter voorkeur; het vereist overweging van uw levensstijl, leefruimte en activiteitenniveau. Of u nu kiest voor een hond, kat, vogel of iets exotischer, het begrijpen van uw toewijding en compatibiliteit is cruciaal. Dit artikel verkent hoe u uw levensstijl kunt matchen met het juiste huisdier, wat zorgt voor een harmonieuze en vervullende relatie voor zowel u als uw nieuwe metgezel.",
    },
    {
      id: "2",
      title: "Het belang van regelmatige veterinaire controles",
      date: "04/06/2024",
      content:
        "Regelmatige veterinaire controles zijn van vitaal belang om de gezondheid en het welzijn van uw geliefde huisdier te waarborgen. Deze routinematige bezoeken detecteren niet alleen vroegtijdig onderliggende gezondheidsproblemen, maar bieden ook mogelijkheden voor preventieve zorg. Van vaccinaties tot tandheelkundige onderzoeken, dit artikel benadrukt het belang van het plannen van regelmatige controles met uw dierenarts om uw harige vriend gelukkig en gezond te houden voor de komende jaren.",
    },
    {
      id: "3",
      title: "Een veilige omgeving creëren voor uw huisdier thuis",
      date: "04/07/2024",
      content:
        "Uw huis moet een toevluchtsoord zijn voor uw huisdier, vrij van gevaren en bedreigingen. Van giftige planten tot elektrische snoeren, er zijn talloze potentiële gevaren die op de loer liggen in alledaagse huishoudelijke artikelen. Dit artikel biedt praktische tips en adviezen over hoe u een veilige omgeving kunt creëren voor uw huisdier, waarbij u hun welzijn en uw gemoedsrust als huisdiereigenaar waarborgt.",
    },
    {
      id: "4",
      title: "Het begrijpen van dierenvoeding: een gids voor huisdiereigenaren",
      date: "04/08/2024",
      content:
        "Een goede voeding is essentieel voor de algehele gezondheid en levensduur van uw huisdier. Het navigeren door de wereld van dierenvoeding kan echter overweldigend zijn, met talloze opties die op de markt verkrijgbaar zijn. Dit artikel legt de basisprincipes van dierenvoeding uit, waaronder essentiële voedingsstoffen, voedingsbehoeften en het ontcijferen van etiketten van dierenvoeding. Gewapend met deze kennis kunnen huisdiereigenaren weloverwogen beslissingen nemen om hun harige metgezellen optimale voeding te bieden.",
    },
    {
      id: "5",
      title: "De voordelen van regelmatige lichaamsbeweging voor huisdieren",
      date: "04/10/2024",
      content:
        "Net als mensen hebben huisdieren regelmatige lichaamsbeweging nodig om hun fysieke en mentale welzijn te behouden. Van dagelijkse wandelingen tot interactieve speelsessies is lichamelijke activiteit essentieel voor het voorkomen van obesitas, het verlichten van verveling en het versterken van de band tussen u en uw huisdier. Dit artikel verkent de voordelen van regelmatige lichaamsbeweging voor huisdieren en biedt praktische tips over hoe u leuke en stimulerende activiteiten kunt opnemen in de dagelijkse routine van uw huisdier.",
    },
  ] as IAnnouncementData[],
};
