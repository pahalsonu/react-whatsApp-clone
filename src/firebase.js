import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB8KP18jLhF91cbSxYOx6QGeqeYxae3AZI",
  authDomain: "whatsappclone-92b7f.firebaseapp.com",
  projectId: "whatsappclone-92b7f",
  storageBucket: "whatsappclone-92b7f.appspot.com",
  messagingSenderId: "102840057411",
  appId: "1:102840057411:web:dea615920dd61440731ef6",
  measurementId: "G-JPZKR8PGLK"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db;