import React, { Component } from 'react';
import './App.css';
import Deals from './components/Deals/Deals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst!</h1>
        </header>
        <Deals />
      </div>
    );
  }
}

export default App;
