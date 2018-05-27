import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Moment from 'react-moment';

class Message extends React.Component {

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this.refs.listItem)
    let listWrapper = node.parentNode.parentNode

    listWrapper.scrollTo(0, listWrapper.scrollHeight)

    setTimeout(() => {
      node.classList.remove('hidden')
    }, 0)
  }

  render() {
    return (
      <li ref='listItem' className={'message hidden ' + (this.props.author === this.props.username ? 'authored' : '')}>
        <span className='author'>{this.props.author === this.props.username ? 'You' : this.props.author} wrote</span>
        <span className='date'><Moment date={this.props.date + '+0000'} fromNow /></span>
        <span className='content'>{this.props.content}</span>
      </li>
    )
  }

}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Message
