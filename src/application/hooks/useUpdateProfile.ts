import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { projectFirestore } from "../../firebase/firebaseConfig";
import {
  ILitter,
  IParents,
  IPetProfile,
  IPhotos,
  IProfileUser,
} from "../../presentation/modules";
import { checkProperties } from "../../presentation/helpers";

type UpdateType = "petCommonInfo" | "petParents" | "petLitter" | "photos";

export const useUpdateProfile = (
  data: IPetProfile | IParents | ILitter | IPhotos | null,
  userId: string | undefined,
  updateType: UpdateType
) => {
  const [profile, setProfile] = useState<IProfileUser | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const updateProfile = async () => {
      setError(null);
      setIsPending(true);

      if (!data || !userId) {
        setProfile(null);
        setIsPending(false);
        return;
      }

      try {
        const userRef = doc(projectFirestore, "users", userId);

        let updateFields: Partial<IProfileUser> = {};

        switch (updateType) {
          case "petCommonInfo":
            updateFields = {
              petCommonInfo: data as IPetProfile,
              commoninfoVerified: checkProperties(data),
            };
            break;
          case "petParents":
            updateFields = { petParents: data as IParents };
            break;
          case "petLitter":
            updateFields = { petLitter: data as ILitter };
            break;
          case "photos":
            updateFields = { photos: data as IPhotos };
            break;
          default:
            break;
        }

        await updateDoc(userRef, updateFields);

        // Fetch the updated user document from Firestore
        const updatedUserSnapshot = await getDoc(userRef);
        const updatedUserData = updatedUserSnapshot.data() as IProfileUser;
        updatedUserData.id = userRef.id;
        setProfile(updatedUserData);

        setIsPending(false);

        if (!isCancelled) {
          setIsPending(false);
          setError(null);
        }
      } catch (error: any) {
        if (!isCancelled) {
          setError(error.message);
          setIsPending(false);
        }
      }
    };

    updateProfile();

    return () => setIsCancelled(true);
  }, [data, userId, updateType, isCancelled]);

  return { profile, error, isPending };
};
