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

const LIBRARY_COLLECTION = "library";

export type LibraryData = {
  userId: string;
  title: string;
  artist: string;
  songId: string;
};

export const getSongInLibrary = async (id: string) => {
  const docRef = doc(db, LIBRARY_COLLECTION, id);

  let result = null;
  let error = null;

  try {
    result = (await getDoc(docRef)).data() as LibraryData;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const getSongsInLibrary = async (userId: string) => {
  const servicesRef = collection(db, LIBRARY_COLLECTION);

  let result = null;
  let error = null;

  try {
    const q = query(servicesRef, where("userId", "==", userId));
    result = await getDocs(q);

    const response: LibraryData[] = [];
    result.forEach((doc) => {
      response.push(doc.data() as LibraryData);
    });
    result = response;
  } catch (e) {
    error = e;
  }

  return { result: result as LibraryData[], error };
};

export const addUpdateSong = async (id: string, data: Partial<LibraryData>) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, LIBRARY_COLLECTION, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};
