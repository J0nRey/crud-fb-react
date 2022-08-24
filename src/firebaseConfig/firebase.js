import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnpgjg4VamUhx79h8NEv-SWIKeZZ0bJXA",
  authDomain: "crud-fire-react-5c801.firebaseapp.com",
  projectId: "crud-fire-react-5c801",
  storageBucket: "crud-fire-react-5c801.appspot.com",
  messagingSenderId: "820986482938",
  appId: "1:820986482938:web:160b66a6d1216a02f6b943"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)