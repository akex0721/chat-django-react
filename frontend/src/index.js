import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import chat from './reducers'
import * as actions from './actions'
import chatSaga from './sagas'
import registerServiceWorker from './registerServiceWorker'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  chat,
  applyMiddleware(
    thunkMiddleware,
    sagaMiddleware
  )
)

store.dispatch(actions.fetchMessages())

sagaMiddleware.run(chatSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
