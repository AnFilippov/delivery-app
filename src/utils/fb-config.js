import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAp6i87WcBXkYLxg3j5LB1QAsTgheogSso",
  authDomain: "delivery-app-18232.firebaseapp.com",
  databaseURL: "https://delivery-app-18232-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "delivery-app-18232",
  storageBucket: "delivery-app-18232.appspot.com",
  messagingSenderId: "162616473947",
  appId: "1:162616473947:web:1053b3ce13cc3c89d4827e"
};

firebase.initializeApp(firebaseConfig);


export default firebase;