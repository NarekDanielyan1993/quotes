import { takeEvery, put, call } from 'redux-saga/effects';
import { setError } from '../error/slice';
// eslint-disable-next-line import/no-cycle
import {
    onFailedQuotes,
    onGetQuotes, onSuccessQuotes
} from './slice';
import {
    GET_QUOTES
} from './sagas-actions';
import apiCall from '../../apiCall';

function* getQuotesGenerator(action) {
    try {
        yield onGetQuotes()
        const { data: quotes } = yield call(apiCall({ url: '/quotes.json' }))
        yield put(onSuccessQuotes(quotes));
    } catch (error) {
        yield put(setError({
            error,
            action: action.type
        }));
        yield put(onFailedQuotes());
    }
}

export default function* quotesSaga() {
    yield takeEvery(GET_QUOTES, getQuotesGenerator);
}