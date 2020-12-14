import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../assets/style.css';

const Calculator = () => {
  const [operate, setOperate] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    const calc = calculate({ ...operate }, buttonName);
    setOperate({ ...calc });
  };

  const { next } = { ...operate };
  return (
    <>
      <div className="main">
        <h1 className="text">Let&apos;s do some math</h1>
        <div className="container">
          <Display
            result={next === null ? '0' : next}
          />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};
export default Calculator;
