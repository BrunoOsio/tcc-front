import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDlgqoxUhAtFXoc1Gi9eRnry6M2jQigabA",
  authDomain: "teamlistphotos.firebaseapp.com",
  projectId: "teamlistphotos",
  storageBucket: "teamlistphotos.appspot.com",
  messagingSenderId: "154957181244",
  appId: "1:154957181244:web:5dbfad8b2085296718ee39"
};

const app = initializeApp(firebaseConfig);

export const photoStorage = getStorage(app);