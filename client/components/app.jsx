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
    this.setState({
      chatMessages: this.state.chatMessages.concat(this.state.inputText)
    })
    this.setState({
      inputText: ""
    })
  }

  showChat = () => {
    const messages = this.state.chatMessages.map((message, index) => {
      return <p key={index}>{message}</p>
    })
    return <div>{messages}</div>
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>JSX ist sehr ähnlich zu HTML</p>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleSend}>Send</button>
        {this.showChat()}
      </div>
    )
  }
}
