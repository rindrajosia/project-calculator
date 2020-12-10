import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div id="one">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div id="two">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div id="free">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div id="four">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div id="five">
      <Button name="0" />
      <Button name="," />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
