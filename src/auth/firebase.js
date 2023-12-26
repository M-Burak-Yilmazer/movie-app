// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPsk_dYtikImeRj_Q04miltnxJnuPOMI",
  authDomain: "movie-app-mathias.firebaseapp.com",
  projectId: "movie-app-mathias",
  storageBucket: "movie-app-mathias.appspot.com",
  messagingSenderId: "477579663410",
  appId: "1:477579663410:web:ade7090574379ed8ba442b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
