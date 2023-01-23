
import firebase from "firebase"
require ("@firebase/firestore")

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCH6-bEnXOsaYEjs67fvZ2VGMD3KSeLH7M",
    authDomain: "project-71-454c5.firebaseapp.com",
    projectId: "project-71-454c5",
    storageBucket: "project-71-454c5.appspot.com",
    messagingSenderId: "401177499045",
    appId: "1:401177499045:web:00b85ce9f1c8b3cf72844c"
  };
  //

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
