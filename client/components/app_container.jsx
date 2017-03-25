import { Meteor } from 'meteor/meteor'
import { Chat } from '/both/collections.js'
import { createContainer } from 'meteor/react-meteor-data'

import App from './app.jsx'

export default createContainer(() => {
  const chatHandle = Meteor.subscribe('chat.all')

  return {
    ready: chatHandle.ready(),
    chatMessages: Chat.find().fetch()
  }
}, App)
