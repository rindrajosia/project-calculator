import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div>
      <div id="one">
        <Button name="AC" handleClick={() => handleClick('AC')} />
        <Button name="+/-" handleClick={() => handleClick('+/-')} />
        <Button name="%" handleClick={() => handleClick('%')} />
        <Button name="÷" handleClick={() => handleClick('÷')} />
      </div>
      <div id="two">
        <Button name="7" handleClick={() => handleClick('7')} />
        <Button name="8" handleClick={() => handleClick('8')} />
        <Button name="9" handleClick={() => handleClick('9')} />
        <Button name="X" handleClick={() => handleClick('X')} />
      </div>
      <div id="free">
        <Button name="4" handleClick={() => handleClick('4')} />
        <Button name="5" handleClick={() => handleClick('5')} />
        <Button name="6" handleClick={() => handleClick('6')} />
        <Button name="-" handleClick={() => handleClick('-')} />
      </div>
      <div id="four">
        <Button name="1" handleClick={() => handleClick('1')} />
        <Button name="2" handleClick={() => handleClick('2')} />
        <Button name="3" handleClick={() => handleClick('3')} />
        <Button name="+" handleClick={() => handleClick('+')} />
      </div>
      <div id="five">
        <Button name="0" handleClick={() => handleClick('0')} />
        <Button name="." handleClick={() => handleClick('.')} />
        <Button name="=" handleClick={() => handleClick('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
