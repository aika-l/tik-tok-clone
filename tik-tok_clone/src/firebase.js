import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK1s9xqj11oAqU532ks_0uVAqK2SfsND8",
  authDomain: "tik-tok-clone-17f81.firebaseapp.com",
  projectId: "tik-tok-clone-17f81",
  storageBucket: "tik-tok-clone-17f81.appspot.com",
  messagingSenderId: "481232409138",
  appId: "1:481232409138:web:9e0155a19b0fbf9ec5222b",
  measurementId: "G-2F9CBWN4W6"
};

  const firebaseApp = 
    firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
