import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { projectFirestore } from "../../firebase/firebaseConfig";
import { ProfileUser } from "../../presentation/modules";

export const useGetUser = (email: string) => {
  const [data, setData] = useState<ProfileUser | null>(null);
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
          where("email", "==", email)
        );
        const querySnapshot = await getDocs(req);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data() as ProfileUser;
          setData(userData);
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
  }, [email, isCancelled]);

  return { data, error, isPending };
};
