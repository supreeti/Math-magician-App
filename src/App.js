import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './component/calculator';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="App">
        <h1>Math Magicians</h1>
        <Calculator />
      </div>
    </>
  );
}

export default App;
