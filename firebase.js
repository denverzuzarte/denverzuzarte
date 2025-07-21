// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV6rMDAUXfUwZFQ5CaGpIuIDShaE_CSSQ",
  authDomain: "denverzuzarte-website.firebaseapp.com",
  projectId: "denverzuzarte-website",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
