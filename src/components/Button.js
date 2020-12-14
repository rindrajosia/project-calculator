import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    handleClick, name, color, wide,
  } = props;

  const getClass = (color, wide) => {
    if (color === 'gray' && wide === true) {
      console.log(wide);
      return 'custom button wide';
    }
    if (color === 'orange' && wide === true) {
      return 'default button wide';
    }
    if (color === 'gray' && wide === false) {
      return 'custom button standard';
    }
    if (color === 'orange' && wide === false) {
      return 'default button standard';
    }
    return 'error';
  };

  return (
    <button
      className={getClass(color, wide)}
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
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: null,
  color: 'orange',
  wide: false,
};

export default Button;
