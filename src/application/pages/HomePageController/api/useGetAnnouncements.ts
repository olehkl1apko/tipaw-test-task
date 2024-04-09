import { useMemo } from "react";
import { AnnouncementData } from "../../../../presentation/pages";

export const useGetAnnouncements = () => {
  const announcements = useMemo(() => {
    return [
      {
        id: "NOT-SO-UNIQUE-ID",
        title: "What is Tipaw ?",
        date: "04/04/2024",
        content:
          "At Tipaw, our mission is to enhance the well-being of animals through innovative digital solutions that connect (future) animal owners, their pets, and animal professionals. Originating from a need to address dog-breeding abuse, we’ve created a platform that facilitates connections between responsible dog breeders and prospective dog owners. Our vision has expanded to include a new platform that connects our community of animal lovers with veterinarians and groomers, offering an online presence and booking services. Every member of our team is committed to making a significant impact, driven by innovation and authenticity, to support the values at the heart of our project.",
      },
    ] as AnnouncementData[];
  }, []);

  return { announcements };
};
