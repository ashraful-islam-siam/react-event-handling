import React from 'react';
import './style.css';

class App extends React.Component {
  state = {
    name: '',
  };
  handleButton = (e) => {
    console.log(e.target);
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleFocuse = (e) => {
    console.log('I am Focuse Event');
  };
  handleBlur = () => {
    if (!this.state.name) {
      alert('Provide your name');
    }
    console.log('I am Blur Event');
  };
  render() {
    return (
      <div>
        <h2>Hi, I am here to handling event</h2>
        <button onClick={this.handleButton}>Click me</button> <br />
        <input
          type="text"
          placeholder="Enter some text"
          onChange={this.handleChange}
          onFocus={this.handleFocuse}
          onBlur={this.handleBlur}
          value={this.state.name}
        />
        {this.state.name && <h3>{this.state.name}</h3>}
      </div>
    );
  }
}

export default App;
