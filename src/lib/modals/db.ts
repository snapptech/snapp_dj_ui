import firebaseApp from "../auth/config";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(firebaseApp);
