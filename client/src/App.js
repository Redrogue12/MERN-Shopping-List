import React, { Component } from 'react';
import AppNavBar from "./components/AppNavbar";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar></AppNavBar>
      </div>
    );
  }
}

export default App;
