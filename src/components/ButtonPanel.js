import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div>
      <div id="one" className="row">
        <Button name="AC" color="gray" handleClick={() => handleClick('AC')} />
        <Button name="+/-" color="gray" handleClick={() => handleClick('+/-')} />
        <Button name="%" color="gray" handleClick={() => handleClick('%')} />
        <Button name="÷" handleClick={() => handleClick('÷')} />
      </div>
      <div id="two" className="row">
        <Button name="7" color="gray" handleClick={() => handleClick('7')} />
        <Button name="8" color="gray" handleClick={() => handleClick('8')} />
        <Button name="9" color="gray" handleClick={() => handleClick('9')} />
        <Button name="X" handleClick={() => handleClick('X')} />
      </div>
      <div id="free" className="row">
        <Button name="4" color="gray" handleClick={() => handleClick('4')} />
        <Button name="5" color="gray" handleClick={() => handleClick('5')} />
        <Button name="6" color="gray" handleClick={() => handleClick('6')} />
        <Button name="-" handleClick={() => handleClick('-')} />
      </div>
      <div id="four" className="row">
        <Button name="1" color="gray" handleClick={() => handleClick('1')} />
        <Button name="2" color="gray" handleClick={() => handleClick('2')} />
        <Button name="3" color="gray" handleClick={() => handleClick('3')} />
        <Button name="+" handleClick={() => handleClick('+')} />
      </div>
      <div id="five" className="row">
        <Button name="0" wide color="gray" handleClick={() => handleClick('0')} />
        <Button name="." color="gray" handleClick={() => handleClick('.')} />
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
