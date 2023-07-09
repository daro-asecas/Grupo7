import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZrolINRtN_ttaP-IorJ83ljsuHoGYTfo",
  authDomain: "carsseven-d720e.firebaseapp.com",
  projectId: "carsseven-d720e",
  storageBucket: "carsseven-d720e.appspot.com",
  messagingSenderId: "827715458163",
  appId: "1:827715458163:web:9e5350cbad304008d30606"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const db = getFirestore(app);

