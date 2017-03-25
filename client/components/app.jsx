import React from 'react'

export default class App extends React.Component {

  state = {
    inputText: "",
    chatMessages: [],
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSend = () => {
    Meteor.call('addChatMessage', this.state.inputText, () => {})
    this.setState({
      // chatMessages: this.state.chatMessages.concat(this.state.inputText),
      inputText: ""
    })
  }

  showChat = () => {
    // const messages = this.state.chatMessages.map((message, index) => {
    const messages = this.props.chatMessages.map((chatDocument, index) => {
      const message = chatDocument.message
      return <p key={index}>{message}</p>
    })
    return <div>{messages}</div>
  }

  render() {
    const styles = {
      container: {
        paddingLeft: '10px',
      },
      fancy: {
        fontStyle: 'italic',
      },
    }
    return (
      <div style={styles.container}>
        <h1>Hello React</h1>
        <p style={styles.fancy}>JSX ist sehr ähnlich zu HTML</p>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleSend}>Send</button>
        {this.showChat()}
      </div>
    )
  }
}
