import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";
import { ProfileData } from "../../presentation/pages/HomePage/types";

type Payload = {
  name?: string;
  email?: string;
  avatar?: string;
};

export const useLogin = (payload: Payload) => {
  const [userFB, setUserFB] = useState<ProfileData | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const { name, avatar, email } = payload;

  useEffect(() => {
    const signup = async () => {
      setError(null);
      setIsPending(true);

      try {
        // check if email already exists
        const existingUserQuery = query(
          collection(projectFirestore, "users"),
          where("email", "==", email)
        );

        const querySnapshot = await getDocs(existingUserQuery);

        if (!querySnapshot.empty) {
          //return existing user
          const existingUser = querySnapshot.docs[0].data();
          setUserFB(existingUser as ProfileData);
        } else {
          // add user to db
          const newUser = {
            name,
            avatar,
            email,
            litterVerified: false,
            parentsVerified: false,
            profilePictureIsVerified: false,
            verified: false,
            globalProgress: 0,
          };

          await addDoc(collection(projectFirestore, "users"), newUser);
          setUserFB(newUser as ProfileData);
        }

        if (!isCancelled) {
          setIsPending(false);
          setError(null);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err.message);
          setIsPending(false);
        }
      }
    };

    signup();

    return () => setIsCancelled(true);
  }, [avatar, email, isCancelled, name]);

  return { userFB, error, isPending };
};
