import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyBgiBVQYVGnJbDYMiNYPRQNVbZYBb4Hy1E",
    authDomain: "idobatakaigi-with-ham-54628.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-54628",
    storageBucket: "idobatakaigi-with-ham-54628.appspot.com",
    messagingSenderId: "427825226976",
    appId: "1:427825226976:web:9c77dad5c59c0328739c85"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database = app.database();
  const messageRef = database.ref("messages");
  export const pushMessage = ({ name, text }) => {
    messageRef.push({name, text})
}
//  const database = getDatabase(app);
/*
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref("messages");

  export const pushMessage = ({ name, text }) => {
    messageRef.push({name, text})
  }*/