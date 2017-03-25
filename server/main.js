import { Meteor } from 'meteor/meteor'
import { Chat } from '/both/collections.js'

Meteor.methods({
  addChatMessage: (message) => {
    Chat.insert({
      message: message
    })
  }
})

Meteor.publish('chat.all', () => {
  return Chat.find()
})
