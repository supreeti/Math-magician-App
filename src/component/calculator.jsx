import { useState } from 'react';
import Buttons from './buttons';
import calculate from '../logic/calculate';
import '../App.css';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    opeation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    setState(calculate(state, buttonName));
  };

  const { total, next, operation } = state;

  return (
    <div className="calculate">
      <div className="result">
        <div className="display">
          <div className="previous-operand">{next || operation}</div>
          <div className="current-operand">{total || next || '0'}</div>
        </div>
        <div className="keypad">
          <Buttons handleButtonClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
