import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3tHfrWZf0cINcM2DrSfE-EW3S2OPpFCI",
  authDomain: "solutions-23098.firebaseapp.com",
  databaseURL: "https://solutions-23098.firebaseio.com",
  projectId: "solutions-23098",
  storageBucket: "",
  messagingSenderId: "45501332569",
  appId: "1:45501332569:web:2d2ab03c98cb4f3e70c548"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;