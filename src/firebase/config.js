import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAFJSyJlkoynn_XRNo3IaR_wZnpkKTHUkw",
    authDomain: "movies-d17ee.firebaseapp.com",
    projectId: "movies-d17ee",
    storageBucket: "movies-d17ee.appspot.com",
    messagingSenderId: "732932466084",
    appId: "1:732932466084:web:02973e24f84c41c8388d31"
  };

//firebase init
firebase.initializeApp(firebaseConfig)

//fire store init
let db =firebase.firestore()

let timestamp =firebase.firestore.FieldValue.serverTimestamp

//firebase auth system
let auth =firebase.auth()

export {db,timestamp,auth}
