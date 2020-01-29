import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCmLpzQl6wkEYBJGVYa1OBCVJLqi-HaUb4",
  authDomain: "resume-project-3fb75.firebaseapp.com",
  databaseURL: "https://resume-project-3fb75.firebaseio.com",
  projectId: "resume-project-3fb75",
  storageBucket: "resume-project-3fb75.appspot.com",
  messagingSenderId: "459384260704",
  appId: "1:459384260704:web:67ca2000e27a9355dd5b05",
  measurementId: "G-4Z6R6QEBS2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
