import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import allReducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [
    ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }),
    sagaMiddleware,
]

const store = configureStore({
    reducer: allReducers,
    devTools: true,
    middleware,
})

sagaMiddleware.run(rootSaga)

export default store
