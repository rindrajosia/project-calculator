import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { handleClick, name } = props;
  return (
    <button
      type="button"
      value={name}
      onClick={e => handleClick(e.target.value)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: null,
};

export default Button;
