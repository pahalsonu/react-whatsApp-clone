import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD9pzDtf1JLO8__RMDdaEl6KDiQ2od-ssk",
    authDomain: "neat-element-298114.firebaseapp.com",
    projectId: "neat-element-298114",
    storageBucket: "neat-element-298114.appspot.com",
    messagingSenderId: "941901177811",
    appId: "1:941901177811:web:3bc9203f0487ac12958526"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db;