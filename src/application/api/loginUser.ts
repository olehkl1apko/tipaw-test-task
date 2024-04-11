import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { projectFirestore } from "../../firebaseConfig";
import { ProfileData } from "../../presentation/pages/HomePage/types";

type Payload = {
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
};

export const loginUser = async (payload: Payload) => {
  const { name, avatar, email, verified } = payload;

  try {
    // check if email already exists
    const existingUserQuery = query(
      collection(projectFirestore, "users"),
      where("email", "==", email)
    );

    const querySnapshot = await getDocs(existingUserQuery);

    //return existing user
    if (!querySnapshot.empty) {
      const existingUser = querySnapshot.docs[0].data();
      return existingUser as ProfileData;
    }

    // add user to db
    if (querySnapshot.empty) {
      const newUser = {
        name,
        avatar,
        email,
        litterVerified: false,
        parentsVerified: false,
        profilePictureIsVerified: false,
        verified,
        globalProgress: verified ? 25 : 0,
      };

      await addDoc(collection(projectFirestore, "users"), newUser);
      return newUser as ProfileData;
    }
  } catch (err: any) {
    return err.message;
  }
};
