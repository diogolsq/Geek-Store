import { takeLatest, put, take } from 'redux-saga/effects';

import UserActionTypes from './user.types';

export 


export function* onGoogleSignInStartAsync(){

    try{
        yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, )
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // collectionRef.get()
    // .then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}


export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}

