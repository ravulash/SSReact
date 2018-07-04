import React, { Component } from 'react';
import logo from './imgs/verizon.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VZ Job Portal</h1>
        </header>
        <br/>
        <form>
            <b>Skills:</b>&nbsp;
            <input type="text" name="Skills"/> &nbsp;&nbsp;
            <b>Location:</b>&nbsp;
            <input type="text" name="loc"/>&nbsp;&nbsp;
            <b>Experience:</b>&nbsp;
            <input type="text" name="exp"/>&nbsp;&nbsp;
            <button type="submit" form="form" value="Search">Search</button>
        </form>

        <footer>
          <h6>Powered By SimpleSamosa</h6>
          </footer>
      </div>
      
    );
  }
}

export default App;
