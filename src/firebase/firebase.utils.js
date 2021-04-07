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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

 //console.log(snapShot);

  if (!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAT = new Date();


    try {

      await userRef.set({
        displayName,
        email,
        createdAT,
        ...additionalData
      })

    } catch(error) {

      console.log('error creating user', error.message);
    }
  }


  return userRef;
}

export const addCollectionAndDocuments = (collectionKey,  objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)
};





firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
