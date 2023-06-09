/* eslint-disable linebreak-style */
import { useState } from 'react';
import Buttons from './buttons';
import calculate from '../logic/calculate';
import '../App.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    opeation: null,
  });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  return (
    <div className="result">
      <Buttons
        handleClick={handleClick}
        total={Number(state.total)}
        operation={state.operation}
        next={state.next}
      />
    </div>
  );
};

export default Calculator;
