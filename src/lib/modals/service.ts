import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./db";

const SERVICE_COLLECTION = "services";

export type Service = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getService = async (id: string, userId: string) => {
  const docRef = doc(db, SERVICE_COLLECTION, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
    const data = result.data();
    if (data?.userId !== userId) {
      result = null;
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const getServices = async (userId: string) => {
  const servicesRef = collection(db, SERVICE_COLLECTION);

  let result = null;
  let error = null;

  try {
    const q = query(servicesRef, where("userId", "==", userId));
    result = await getDocs(q);

    const response: Service[] = [];
    result.forEach((doc) => {
      response.push(doc.data() as Service);
    });
    result = response;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const createService = async (id: string, data: Service) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, SERVICE_COLLECTION, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
