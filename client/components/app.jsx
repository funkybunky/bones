import React from 'react';

export default class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputText: ""
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSend = this.handleSend.bind(this);
  // }

  state = {
    inputText: ""
  }

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSend = (event) => {

  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>JSX ist sehr ähnlich zu HTML</p>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}
