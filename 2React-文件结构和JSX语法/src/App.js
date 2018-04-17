import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Hi, React App</p>
      </div>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
  }
}

export default App;
