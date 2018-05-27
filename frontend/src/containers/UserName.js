import { connect } from 'react-redux'

import UserNameComponent from '../components/UserName'

const UserName = connect(state => ({
  username: state.username
}), {})(UserNameComponent)

export default UserName
