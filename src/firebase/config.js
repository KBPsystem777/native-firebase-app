import * as firebase from "firebase";
import "@firebase/auth-types";
import "@firebase/firestore";

require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyB-1NU4lKaKv9_a_l4BIbQesmiqbtkf3Ok ",
  authDomain: "dev-native-22158.firebaseapp.com",
  databaseURL: "https://dev-native-22158.firebaseio.com/",
  projectId: "dev-native-22158",
  storageBucket: "dev-native-22158.appspot.com",
  messagingSenderId: "648226726861",
  appId: "1:648226726861:ios:03bdd7a37021a1dca81a84",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
