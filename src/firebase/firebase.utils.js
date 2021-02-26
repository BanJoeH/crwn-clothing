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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
