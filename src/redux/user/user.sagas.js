import { takeLatest, put, take } from 'redux-saga/effects';

import UserActionTypes from './user.types';

//Todo pass to saga

export function* onGoogleSignInStartAsync(){

    try{
        yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, )
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

}



