import { Meteor } from 'meteor/meteor'

const Chat = new Mongo.Collection('chat')

Meteor.methods({
  addChatMessage: (message) => {
    check(message, String)
    Chat.insert({
      message: message
    })
  }
})

Meteor.publish('chat.all', () => {
  return Chat.find()
})
