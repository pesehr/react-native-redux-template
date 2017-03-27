import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
 function* gotoFirst() {
     yield delay(1000);
     yield put({ type: 'PUSH' ,name: 'first' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
 function* watchGotoFirst() {
    yield takeEvery('GOTO_FIRST', gotoFirst)
}

export default function* rootSaga() {
    yield [
        watchGotoFirst()
    ]
}