import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0IZh1VZ2zH7VMEIlKuqWg2JK-BLm4yv8",
    authDomain: "challange-24111.firebaseapp.com",
    databaseURL: "https://challange-24111.firebaseio.com",
    projectId: "challange-24111",
    storageBucket: "challange-24111.appspot.com",
    messagingSenderId: "609269798915",
    appId: "1:609269798915:web:0de7434945edc75b7f9636",
    measurementId: "G-BVZDQVB31V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };