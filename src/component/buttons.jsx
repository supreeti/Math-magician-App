import React from 'react';

const Buttons = () => (
  <div className="calculate">
    <div className="display">0</div>
    <div className="keypad">
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="btn-Operator">÷</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="btn-Operator">x</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="btn-Operator">-</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="btn-Operator">+</button>
      <button type="button" className="button z">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="btn-Operator">=</button>
    </div>
  </div>
);

export default Buttons;
