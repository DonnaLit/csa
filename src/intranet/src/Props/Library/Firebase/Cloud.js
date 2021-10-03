
import 'firebase/storage';
import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyA1iSzsrDgL2bwP4XmdCEiPkMrmFYkKsAM",
  authDomain: "csafiles-be83c.firebaseapp.com",
  projectId: "csafiles-be83c",
  storageBucket: "csafiles-be83c.appspot.com",
  messagingSenderId: "117658269882",
  appId: "1:117658269882:web:5becb3b887308b91ee2a83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };