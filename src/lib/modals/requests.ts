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

const REQUEST_COLLECTION = "request";

export type RequestData = {
  id: string;
  userId: string;
  email: string;
  amount: number;
  songName: string;
  artist: string;
  status: "approved" | "pending" | "rejected" | "done";
  createdAt: number;
  updatedAt: number;
};

export const getRequest = async (id: string) => {
  const docRef = doc(db, REQUEST_COLLECTION, id);

  let result = null;
  let error = null;

  try {
    result = (await getDoc(docRef)).data() as RequestData;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const getRequests = async (userId: string) => {
  const servicesRef = collection(db, REQUEST_COLLECTION);

  let result = null;
  let error = null;

  try {
    const q = query(servicesRef, where("userId", "==", userId));
    result = await getDocs(q);

    const response: RequestData[] = [];
    result.forEach((doc) => {
      response.push(doc.data() as RequestData);
    });
    result = response;
  } catch (e) {
    error = e;
  }

  return { result: result as RequestData[], error };
};

export const updateRequest = async (id: string, data: Partial<RequestData>) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, REQUEST_COLLECTION, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
