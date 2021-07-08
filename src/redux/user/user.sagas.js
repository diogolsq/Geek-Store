import { takeLatest, put, all, call, take } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'

import { signInSuccess, signInFailure } from './user.actions';
//Todo pass to saga

export function* getSnapshotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()  }))

    } catch(error) {
        yield put(signInFailure(error));
    }
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error) {
        yield put(signInFailure(error));
    }

}



export function* signInWithGoogle() {
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}


// export function* onGoogleSignInStartAsync(){

//     try{
//         yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, )
//     } catch (error) {
//         yield put(fetchCollectionsFailure(error.message));
//     }

// }

export function* signInWithEmail({ payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        console.log(user);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}


export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}




export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession)]);
}

