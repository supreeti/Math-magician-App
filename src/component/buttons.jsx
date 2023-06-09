/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

export default function Buttons({ handleButtonClick }) {
  return (
    <>
      <button type="button" onClick={handleButtonClick}>AC</button>
      <button type="button" onClick={handleButtonClick}>+/-</button>
      <button type="button" onClick={handleButtonClick}>%</button>
      <button type="button" onClick={handleButtonClick} className="btn-operator">÷</button>
      <button type="button" onClick={handleButtonClick}>7</button>
      <button type="button" onClick={handleButtonClick}>8</button>
      <button type="button" onClick={handleButtonClick}>9</button>
      <button type="button" onClick={handleButtonClick} className="btn-operator">x</button>
      <button type="button" onClick={handleButtonClick}>4</button>
      <button type="button" onClick={handleButtonClick}>5</button>
      <button type="button" onClick={handleButtonClick}>6</button>
      <button type="button" onClick={handleButtonClick} className="btn-operator">-</button>
      <button type="button" onClick={handleButtonClick}>1</button>
      <button type="button" onClick={handleButtonClick}>2</button>
      <button type="button" onClick={handleButtonClick}>3</button>
      <button type="button" onClick={handleButtonClick} className="btn-operator">+</button>
      <button type="button" onClick={handleButtonClick}>0</button>
      <button type="button" onClick={handleButtonClick} className="z">.</button>
      <button type="button" onClick={handleButtonClick}>=</button>
    </>
  );
}

Buttons.propTypes = { handleButtonClick: PropTypes.func.isRequired };
