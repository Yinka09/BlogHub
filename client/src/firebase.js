// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "alx-blogging-app.firebaseapp.com",
  projectId: "alx-blogging-app",
  storageBucket: "alx-blogging-app.appspot.com",
  messagingSenderId: "702248665119",
  appId: "1:702248665119:web:79ea2afd36e2e5653a552a",
  measurementId: "G-6S6FPCT1R0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
