import { all } from 'redux-saga/effects';
import quotesSaga from './quote/sagas';

export default function* rootSaga() {
    yield all([
        quotesSaga()
    ]);
}