import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import googleServiceAccount from "../config/firebase";

initializeApp({
  credential: cert(googleServiceAccount),
});

const db = getFirestore();

export default db;
