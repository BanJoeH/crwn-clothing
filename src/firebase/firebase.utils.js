import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBv1Qp4Mdue0hU2dghFsZG7OG0rpQyGZQ",
  authDomain: "crwn-db-c71c7.firebaseapp.com",
  projectId: "crwn-db-c71c7",
  storageBucket: "crwn-db-c71c7.appspot.com",
  messagingSenderId: "418910936635",
  appId: "1:418910936635:web:38deec2af6caf36a13861e",
  measurementId: "G-7BGX21B2YH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;