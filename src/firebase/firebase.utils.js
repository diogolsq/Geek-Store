import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: process.env.REACT_APP_Firebase_apiKey,
    authDomain: process.env.REACT_APP_Firebase_authDomain,
    projectId: process.env.REACT_APP_Firebase_projectId,
    storageBucket: process.env.REACT_APP_Firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
    appId: process.env.REACT_APP_Firebase_appId,
    measurementId: process.env.REACT_APP_Firebase_measurementId
}


firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
