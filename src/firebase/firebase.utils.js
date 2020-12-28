import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA0UDh6wOCjW289r7zICYg8OfF-3ipBeag",
    authDomain: "e-commercer-c9213.firebaseapp.com",
    projectId: "e-commercer-c9213",
    storageBucket: "e-commercer-c9213.appspot.com",
    messagingSenderId: "812471199323",
    appId: "1:812471199323:web:88f71250b14afc6068417e",
    measurementId: "G-LMVMWS9M2R"
}


firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
