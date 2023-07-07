import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./db";

const USER_COLLECTION = "users";

export type User = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getUser = async (id: string) => {
  const docRef = doc(db, USER_COLLECTION, id);

  let result = null;
  let error = null;

  try {
    result = (await getDoc(docRef)).data() as User;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const updateUser = async (
  id: string,
  data: Partial<User>
) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, USER_COLLECTION, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
