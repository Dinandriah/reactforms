import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Create Logon">
        <header className="App-header">
         
          <form id = 'Create'>
            First Name <input id="First Name" name="First Name" placeholder="First Name" required/><br/>
            Last Name <input type="Last Name" name="Last Name" placeholder="Last Name" required/><br/>
            E-mail Address <input type="email" placeholder="E-mail"required/><br/>
            Phone Number <input type="tel" placeholder="Telephone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required/><br/>
            Age <input type="number" placeholder="Age" min="0" max="100"required/><br/>
            Password <input type="password" placeholder="Password" required/><br/>
            Password Confirmation <input type="password" placeholder="Confirm Password" required/><br/>
            <button>Register</button>

    </form>

        </header>
      </div>
    );
  }
}

export default App;
