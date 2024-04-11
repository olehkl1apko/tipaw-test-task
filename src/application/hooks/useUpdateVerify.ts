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

export const useUpdateVerify = (user: AuthUser) => {
  const [updatedUser, setUpdatedUser] = useState<ProfileData | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setError(null);
      setIsPending(true);

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

          setUpdatedUser((prevUser) => {
            if (prevUser) {
              return {
                ...prevUser,
                verified: user.email_verified,
              };
            }
            return null;
          });
        } else {
          setError(true);
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

    getUser();

    return () => setIsCancelled(true);
  }, [isCancelled, user]);

  return { updatedUser, error, isPending };
};
