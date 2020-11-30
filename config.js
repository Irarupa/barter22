import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0ROXZwzuOWhuR7RwB7uAmSJh3sMt2Q80",
    authDomain: "bartersystem1-5eeb7.firebaseapp.com",
    databaseURL: "https://bartersystem1-5eeb7.firebaseio.com",
    projectId: "bartersystem1-5eeb7",
    storageBucket: "bartersystem1-5eeb7.appspot.com",
    messagingSenderId: "848146594349",
    appId: "1:848146594349:web:b9ebb8b63a5516b7e016a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
