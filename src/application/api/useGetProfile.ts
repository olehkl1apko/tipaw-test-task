import { useMemo } from "react";
import { ProfileData } from "../../presentation/pages/HomePage/types";

export const useGetProfile = () => {
  const profile = useMemo(() => {
    return {
      name: "John Smith",
      avatar: "https://tipaw.com/assets/Pierre-7VHVR6YF.webp",
      globalProgress: 100, // %
      litterVerified: false,
      parentsVerified: true,
      profilePictureIsVerified: true,
      verified: true,
    } as ProfileData;
  }, []);

  return { profile };
};
