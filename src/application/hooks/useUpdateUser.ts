import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";
import { ProfileData } from "../../presentation/pages/HomePage/types";
import { AuthUser } from "../../presentation/modules";

export const useUpdateUser = (user: AuthUser) => {
  const [userFB, setUserFB] = useState<ProfileData | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const updateUser = async () => {
      setError(null);
      setIsPending(true);

      if (!user) {
        setUserFB(null);
        setIsPending(false);
        return;
      }

      try {
        const req = query(
          collection(projectFirestore, "users"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(req);

        if (!querySnapshot.empty) {
          const docId = querySnapshot.docs[0].id;
          await updateDoc(doc(projectFirestore, "users", docId), {
            verified: user.email_verified,
          });

          const updatedDocSnapshot = await getDocs(req);
          const updatedDocData = updatedDocSnapshot.docs[0].data();

          setUserFB(updatedDocData as ProfileData);
        } else {
          setUserFB(null);
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
  }, [isCancelled, user]);

  return { userFB, error, isPending };
};
