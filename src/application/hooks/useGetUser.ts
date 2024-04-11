import { useState, useEffect } from "react";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";

export const useGetUser = (email: string) => {
  const [data, setData] = useState<DocumentData | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
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
          const userData = querySnapshot.docs[0].data();
          setData(userData);
        } else {
          setData(null);
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
