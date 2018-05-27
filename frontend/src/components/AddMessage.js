import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = ({ author, dispatch }) => {
  let input

  const submitMessage = (ev) => {
    if (ev.type === 'keypress' && ev.key !== 'Enter') {
      return
    }

    ev.preventDefault()

    dispatch(author, input.value)
    input.value = ''
  }

  return (
    <section id='new-message'>
      <form onSubmit={submitMessage}>
        <textarea
          ref={(node) => {
            input = node
          }}
          onKeyPress={submitMessage}
          placeholder='Type your message here'
          autoFocus
        />
        <input type='submit' value='Send' />
      </form>
    </section>
  )
}

AddMessage.propTypes = {
  author: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
