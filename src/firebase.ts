import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFc12pwKpGRILl7nJCSMf3-0oPazupSU",
  authDomain: "alta-acf8b.firebaseapp.com",
  databaseURL:
    "https://alta-acf8b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alta-acf8b",
  storageBucket: "alta-acf8b.appspot.com",
  messagingSenderId: "793496873900",
  appId: "1:793496873900:web:25a72296ac3182e15ee809",
  measurementId: "G-07ZK0T500D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { firebaseConfig };
