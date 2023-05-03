import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNihEhprObs_zqGPzLj7fIha_Mnwz-W4",
  authDomain: "palatable-world-client-site.firebaseapp.com",
  projectId: "palatable-world-client-site",
  storageBucket: "palatable-world-client-site.appspot.com",
  messagingSenderId: "58478539605",
  appId: "1:58478539605:web:01db8d47fe5bb3c3abb5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app