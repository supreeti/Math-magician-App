import React from 'react';
import Buttons from './buttons';
import '../App.css';

const Calculator = () => (
  <main className="calculator">
    <header>
      <h2>Lets Calculate!</h2>
    </header>
    <div className="result">
      <Buttons />
    </div>
  </main>
);

export default Calculator;