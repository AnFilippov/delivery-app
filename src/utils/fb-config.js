import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB4mfB0woMSY9X-dgez4-_mO7G9O7qI9Oo",
  authDomain: "delivery-app-c0a0b.firebaseapp.com",
  databaseURL: "https://delivery-app-c0a0b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "delivery-app-c0a0b",
  storageBucket: "delivery-app-c0a0b.appspot.com",
  messagingSenderId: "513920629259",
  appId: "1:513920629259:web:a5142e15da01b89dbb650e"
};

firebase.initializeApp(firebaseConfig);


export default firebase;