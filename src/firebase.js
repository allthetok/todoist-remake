import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDwpMMWeCmJGa4UpKKSi9YFOO6CJ82jrM4",
  authDomain: "todoist-33e27.firebaseapp.com",
  databaseURL: "https://todoist-33e27.firebaseio.com",
  projectId: "todoist-33e27",
  storageBucket: "todoist-33e27.appspot.com",
  messagingSenderId: "638183684683",
  appId: "1:638183684683:web:15317a29fe29bcf3566bce",
});

export { firebaseConfig as firebase };
