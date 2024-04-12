import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { projectFirestore } from "../../firebase/firebaseConfig";
import { IPetProfile } from "../../presentation/modules";

export const useUpdateProfile = (data: IPetProfile, email: string) => {
  const [profile, setProfile] = useState<IPetProfile | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const updateUser = async () => {
      setError(null);
      setIsPending(true);

      if (!data) {
        setProfile(null);
        setIsPending(false);
        return;
      }

      try {
        const req = query(
          collection(projectFirestore, "users"),
          where("email", "==", email)
        );

        const querySnapshot = await getDocs(req);

        if (!querySnapshot.empty) {
          const docId = querySnapshot.docs[0].id;
          await updateDoc(doc(projectFirestore, "users", docId), {
            verified: data.email_verified,
          });

          const updatedDocSnapshot = await getDocs(req);
          const updatedDocData = updatedDocSnapshot.docs[0].data();

          setProfile(updatedDocData as IPetProfile);
        } else {
          setProfile(null);
        }

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

    updateUser();

    return () => setIsCancelled(true);
  }, [data, isCancelled]);

  return { profile, error, isPending };
};
