import React, { Component } from 'react';
import logo from './logo.svg';
// import NavExpand from './components/NavExpand';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PseudoCoin</h1>
          <Home />
          <NavExpand />
        </header>
        <p className="App-intro">
          Welcome to PseudoCoin! Click on the "Current Amount" or "Investments" section, or click on the side navigation bar for "Subscriptions", "Manage", "User Profile", or "Notifications".
        </p>
      </div>
    );
  }
}

export default App;
