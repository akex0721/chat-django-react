import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

const MessagesList = ({ username, messages }) => (
  <section id='messages-list'>
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          username={username}
          {...message}
        />
      ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessagesList
