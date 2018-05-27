import React from 'react'

import AddMessage from './containers/AddMessage'
import MessagesList from './containers/MessagesList'
import UserName from './containers/UserName'

import './App.css'

class App extends React.Component {

  render() {
    return (
      <div id='container'>
        <main id='main'>
          <UserName />
          <MessagesList />
          <AddMessage />
        </main>
      </div>
    )
  }

}

export default App
