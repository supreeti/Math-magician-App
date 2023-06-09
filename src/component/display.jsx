/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

const Display = ({ total, operation, next }) => (
  <div className="display">
    {total}
    {operation}
    {next}
  </div>
);

Display.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Screen.defaultProps = {
  total: '',
  operation: null,
  next: null,
};

export default Display;
