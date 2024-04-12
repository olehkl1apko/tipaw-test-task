import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { projectFirestore } from "../../firebase/firebaseConfig";
import { ProfileUser } from "../../presentation/modules";

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

    //if existing - update user verification and return updated user
    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      await updateDoc(doc(projectFirestore, "users", docId), {
        verified,
      });
      const updatedDocSnapshot = await getDocs(existingUserQuery);
      const updatedUser = updatedDocSnapshot.docs[0].data();

      return updatedUser as ProfileUser;
    }

    // if not existing - add to firestore and return new user
    if (querySnapshot.empty) {
      const newUser = {
        name,
        avatar,
        email,
        litterVerified: false,
        parentsVerified: false,
        profilePictureIsVerified: false,
        verified,
      };

      await addDoc(collection(projectFirestore, "users"), newUser);
      return newUser as ProfileUser;
    }
  } catch (err: any) {
    return err.message;
  }
};
