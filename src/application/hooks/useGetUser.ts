import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";

type Payload = {
  name?: string;
  email?: string;
  avatar?: string;
};

export const useGetUser = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getUserProfile = async (email) => {
    try {
      const docRef = doc(fireDB, "users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          success: true,
          data: docSnap.data(),
        };
      } else {
        return {
          success: false,
          message: "No such user!",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  };

  return { signup, error, isPending };
};
