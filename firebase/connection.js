import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXG2-3QE8DQrh2G6NCIrJuUm86tN7enGg",
    authDomain: "invoices-6630d.firebaseapp.com",
    databaseURL: "https://invoices-6630d.firebaseio.com",
    projectId: "invoices-6630d",
    storageBucket: "invoices-6630d.appspot.com",
    messagingSenderId: "50639962533",
    appId: "1:50639962533:web:d6d47dfcf198c550afa84c",
    measurementId: "G-M8VP8N961T"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;