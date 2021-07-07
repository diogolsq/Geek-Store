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

export const addCollectionAndDocuments = async (collectionKey,  objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);




  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })


  return await batch.commit()
};




export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title,items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
    }
  );
    
  return transformedCollection.reduce((accumulator, collections) => {
    accumulator[collections.title.toLowerCase()] = collections;
    return accumulator;
  },  {});
}   



export const auth = firebase.auth();
export const firestore = firebase.firestore();



export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;
