import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; 
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas'
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// i am going to pass each of my sagas in it
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

