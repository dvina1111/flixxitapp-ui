import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBXZ_hPiOsssN2ly2XJz40n_LKYNPw-RE",
  authDomain: "flixxit-react-project.firebaseapp.com",
  projectId: "flixxit-react-project",
  storageBucket: "flixxit-react-project.appspot.com",
  messagingSenderId: "485550574103",
  appId: "1:485550574103:web:bd67f8dd7ded3c6d9caa52",
  measurementId: "G-YY3W5CYHS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth (app);