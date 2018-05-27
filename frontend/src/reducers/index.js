import { combineReducers } from 'redux'

import Chance from 'chance'

import * as actions from '../actions'

const username = (state = null, action) => {
  if (!state) {
    state = new Chance().first()
  }

  return state
}

const messages = (state = [], action) => {
  switch (action.type) {
    case actions.MESSAGE_RECEIVED:
      for (var i in state) {
        var message = state[i]
        if (message.id === action.message.id) {
          return state
        }
      }

      return state.concat([action.message])
    default:
      return state
  }
}

const chat = combineReducers({
  username,
  messages
})

export default chat
