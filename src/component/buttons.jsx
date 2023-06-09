/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import Display from './display';

const Buttons = ({
  handleClick, total, operation, next,
}) => (
  <div className="calculate">
    <Display total={Number(total)} operation={operation} next={next} />
    <div className="keypad">
      <button type="button" className="button" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" className="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" className="button" onClick={() => handleClick('%')}>%</button>
      <button type="button" className="btn-Operator" onClick={() => handleClick('AC')}>÷</button>
      <button type="button" className="button" onClick={() => handleClick('7')}>7</button>
      <button type="button" className="button" onClick={() => handleClick('8')}>8</button>
      <button type="button" className="button" onClick={() => handleClick('9')}>9</button>
      <button type="button" className="btn-Operator" onClick={() => handleClick('x')}>x</button>
      <button type="button" className="button" onClick={() => handleClick('4')}>4</button>
      <button type="button" className="button" onClick={() => handleClick('5')}>5</button>
      <button type="button" className="button" onClick={() => handleClick('6')}>6</button>
      <button type="button" className="btn-Operator" onClick={() => handleClick('-')}>-</button>
      <button type="button" className="button" onClick={() => handleClick('1')}>1</button>
      <button type="button" className="button" onClick={() => handleClick('2')}>2</button>
      <button type="button" className="button" onClick={() => handleClick('3')}>3</button>
      <button type="button" className="btn-Operator" onClick={() => handleClick('+')}>+</button>
      <button type="button" className="button z" onClick={() => handleClick('0')}>0</button>
      <button type="button" className="button" onClick={() => handleClick('.')}>.</button>
      <button type="button" className="btn-Operator" onClick={() => handleClick('=')}>=</button>
    </div>
  </div>
);

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Buttons.defaultProps = {
  operation: null,
  next: null,
};

export default Buttons;
