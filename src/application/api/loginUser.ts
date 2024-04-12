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
import { IProfileUser } from "../../presentation/modules";

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

      return updatedUser as IProfileUser;
    }

    // if not existing - add to firestore and return new user
    if (querySnapshot.empty) {
      const newUser = {
        name,
        avatar,
        email,
        commoninfoVerified: false,
        litterVerified: false,
        parentsVerified: false,
        profilePictureIsVerified: false,
        verified,
        petCommonInfo: {
          petName: null,
          specie: null,
          age: null,
          gender: "Male",
          color: null,
          weight: null,
        },
        petParents: {
          father: null,
          fatherAwards: null,
          mother: null,
          motherAwards: null,
        },
        petLitter: {
          puppies: null,
          birthDate: null,
        },
      };

      await addDoc(collection(projectFirestore, "users"), newUser);
      return newUser as IProfileUser;
    }
  } catch (err: any) {
    return err.message;
  }
};
