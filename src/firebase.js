import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDrrfIUlIfzLQDbeprTHCARatC9n8vfbUM",
  authDomain: "line-clone1.firebaseapp.com",
  projectId: "line-clone1",
  storageBucket: "line-clone1.appspot.com",
  messagingSenderId: "20932457890",
  appId: "1:20932457890:web:60d0d5e4db079d9fbaeefb"
});

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {db,auth};