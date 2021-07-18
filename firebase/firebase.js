import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

const config = {
    apiKey: "AIzaSyABDBj4q1452m4NaNEJbTyx9qAaqfp1a-g",
    authDomain: "survey-data-2d43a.firebaseapp.com",
    
    projectId: "survey-data-2d43a",
    storageBucket: "survey-data-2d43a.appspot.com",
    messagingSenderId: "83639777314",
    appId: "1:83639777314:web:d3799dc3e16bcbc697f27b",
    measurementId: "G-75H6QVRXZS"
  };

export default function initFirebase(){
    if (!firebase.apps.length){
        firebase.initializeApp(config)
    }
    console.log("firebase was successfully init")
    
}

