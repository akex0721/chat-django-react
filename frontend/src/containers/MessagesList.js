import { connect } from 'react-redux'

import MessagesListComponent from '../components/MessagesList'

const MessagesList = connect(state => ({
  username: state.username,
  messages: state.messages
}), {})(MessagesListComponent)

export default MessagesList
