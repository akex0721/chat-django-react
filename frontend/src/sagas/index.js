import { fork, call, put, takeEvery } from 'redux-saga/effects'

import * as actions from '../actions'

const delay = (millis) => {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), millis)
  })
  return promise
}

const pollData = function*() {
  while (true) {
    yield call(delay, 500)
    yield put(actions.fetchMessages())
  }
}

const submitNewMessages = function*(params) {
  yield takeEvery(actions.ADD_MESSAGE, (action) => {
    actions.submitMessage(action)
  })
}

const root = function*() {
  yield [
    fork(pollData),
    submitNewMessages()
  ]
}

export default root
