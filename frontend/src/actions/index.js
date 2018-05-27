export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'

export const fetchMessages = () => {
  return (dispatch) => {
    return fetch('//localhost:8000/messages/')
      .then(
        response => response.json(),
        error => console.log('Error', error)
      )
      .then(json => {
        json.map(message => dispatch(messageReceived(message)))
      })
  }
}

export const submitMessage = (message) => {
  return fetch('//localhost:8000/messages/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message)
  })
}

export const addMessage = (author, content) => ({
  type: ADD_MESSAGE,
  author,
  content
})

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  message
})
