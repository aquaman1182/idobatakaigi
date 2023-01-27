import firebase from "firebase/compat/app";
import "firebase/compat/database";

console.log(process.env.REACT_APP_FOO);
const {
REACT_APP_FIREBASE_PROJECT_ID,
REACT_APP_FIREBASE_API_KEY,
REACT_APP_FIREBASE_AUTH_DOMAIN,
REACT_APP_FIREBASE_STORAGE_BUCKET,
REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
REACT_APP_FIREBASE_APP_ID,

} = process.env
;
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database = app.database();
  export const messagesRef = database.ref("messages");

  export const pushMessage = ({ name, text }) => {
    messagesRef.push({name, text})
}
//  const database = getDatabase(app);
/*
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref("messages");

  export const pushMessage = ({ name, text }) => {
    messageRef.push({name, text})
  }*/