import React from 'react'
import PropTypes from 'prop-types'

const UserName = ({ username }) => (
  <section id='username'>
    <span className='label'>Your username is</span>
    {' '}
    <span className='username'>{username}</span>
  </section>
)

UserName.propTypes = {
  username: PropTypes.string.isRequired
}

export default UserName
