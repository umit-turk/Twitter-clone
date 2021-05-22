import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDqTrUaQ6N_njSvdnZBfDyEB1y098pemco",
  authDomain: "twitter-clone-d063a.firebaseapp.com",
  projectId: "twitter-clone-d063a",
  storageBucket: "twitter-clone-d063a.appspot.com",
  messagingSenderId: "346173101018",
  appId: "1:346173101018:web:cccc8b7188f50ab55966e3",
  measurementId: "G-QDWQ794435",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export default db;
