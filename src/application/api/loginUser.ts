import {
  addDoc,
  collection,
  doc,
  getDoc,
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

export const loginUser = async (payload: Payload): Promise<IProfileUser> => {
  const { name, avatar, email, verified } = payload;

  try {
    const existingUserQuery = query(
      collection(projectFirestore, "users"),
      where("email", "==", email)
    );

    const querySnapshot = await getDocs(existingUserQuery);

    let userId;

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
          gender: "Another",
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

      const newUserDocRef = await addDoc(
        collection(projectFirestore, "users"),
        newUser
      );
      userId = newUserDocRef.id;
    } else {
      const docId = querySnapshot.docs[0].id;
      await updateDoc(doc(projectFirestore, "users", docId), {
        verified,
      });
      userId = docId;
    }

    const userDocRef = doc(projectFirestore, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);

    const userData = userDocSnapshot.data();
    return { id: userDocSnapshot.id, ...userData } as IProfileUser;
  } catch (err: any) {
    return err.message;
  }
};
