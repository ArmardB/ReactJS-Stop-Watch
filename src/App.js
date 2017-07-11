import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Simple Timer</h2>
        </div>
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
