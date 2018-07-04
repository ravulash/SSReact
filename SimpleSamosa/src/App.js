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
        <br/>
        
        <div>
          <table border="1" align="center" >   
            
              <tr bgcolor="	#DDA0DD">
                <th>JobDetails</th>
                <th>Description</th>
                <th>Location</th>
                <th>Open Date</th>
              </tr>
              <tr bgcolor="#FFE4B5">
                <td>QA LEAD</td>
                <td>Lead 20 memebr team of ITO Automation</td>
                <td>Hyderabad</td>
                <td>June 10 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>QA Manager</td>
                <td>Manage 40 memebr team of ITO Automation</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>Analyst</td>
                <td>software testing</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>Senior Manager</td>
                <td>Should able to manager 100 people team</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
         </table>
        </div>
       
        <footer>
          <h6>Powered By SimpleSamosa</h6>
          </footer>
      </div>
      
      
    );
  }
}

export default App;
