import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDusYWGfTKHYdcWtq2q_xLzfiWVY71roxc",
  authDomain: "mostazagram-ab9c2.firebaseapp.com",
  projectId: "mostazagram-ab9c2",
  storageBucket: "mostazagram-ab9c2.appspot.com",
  messagingSenderId: "595463559199",
  appId: "1:595463559199:web:2aa90852e62e8f9e665d2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
