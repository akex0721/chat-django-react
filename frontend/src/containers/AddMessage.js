import { connect } from 'react-redux'

import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const AddMessage = connect(
  state => ({
    author: state.username
  }),
  dispatch => ({
    dispatch: (author, message) => {
      dispatch(addMessage(author, message))
    }
  })
)(AddMessageComponent)

export default AddMessage
