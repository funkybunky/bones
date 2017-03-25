import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello React</p>
      </div>
    )
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
