import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
