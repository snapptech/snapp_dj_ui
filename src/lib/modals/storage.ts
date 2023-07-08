import firebaseApp from "../auth/config";
import { getStorage } from "firebase/storage";

export const storage = getStorage(firebaseApp);
