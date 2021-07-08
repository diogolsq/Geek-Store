import { takeLatest, call, put, all } from 'redux-saga/effects';

import  { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import ShopActionTypes from './shop.types';


import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'


export function* fetchCollectionsAsync(){

    try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); // Instead of treatching as promisses, the yield already returns to me ".then" to the variable
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // using call another way of writing line 23, but now passing yield as well
    yield put(fetchCollectionsSuccess(collectionsMap)); // we dont use dispatch as in thunk, we use put in saga 
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

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}