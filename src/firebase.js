import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOPScwfzLSxH-l3qtrCuMOCOyIoEkhlV4",
    authDomain: "slack-clone-af872.firebaseapp.com",
    projectId: "slack-clone-af872",
    storageBucket: "slack-clone-af872.appspot.com",
    messagingSenderId: "709972194303",
    appId: "1:709972194303:web:e67408636f26f4f93d6dca",
    measurementId: "G-NJ54HE6SR1"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
