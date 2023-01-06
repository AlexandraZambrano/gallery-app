// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// import {getFirestorage, getStorage} from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAXJm0ERGDH821PtfXq7AAtKuyE5obOcII",
//   authDomain: "galleryapp-1f77f.firebaseapp.com",
//   projectId: "galleryapp-1f77f",
//   storageBucket: "galleryapp-1f77f.appspot.com",
//   messagingSenderId: "1046636754128",
//   appId: "1:1046636754128:web:ff227acba23e6561b65ad5"
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRbc33WF7yq3tF8vmqwzoNh88wq1_wzUw",
  authDomain: "gallery-app-6f20b.firebaseapp.com",
  projectId: "gallery-app-6f20b",
  storageBucket: "gallery-app-6f20b.appspot.com",
  messagingSenderId: "244741779618",
  appId: "1:244741779618:web:48f83b511fb898463f27fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);