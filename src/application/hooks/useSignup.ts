import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";

type Payload = {
  name?: string;
  email?: string;
  avatar?: string;
};

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (payload: Payload) => {
    setError(null);
    setIsPending(true);

    try {
      // check if email already exists
      const existingUser = query(
        collection(projectFirestore, "users"),
        where("email", "==", payload.email)
      );

      const querySnapshot = await getDocs(existingUser);
      if (querySnapshot.size > 0) {
        return {
          success: false,
          message: "Email already exists",
        };
      }

      // add user to db
      const newUser = {
        name: payload.name,
        avatar: payload.avatar,
        email: payload.email,
        litterVerified: false,
        parentsVerified: false,
        profilePictureIsVerified: false,
        verified: true,
        globalProgress: 25,
      };
      await addDoc(collection(projectFirestore, "users"), newUser);

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

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
