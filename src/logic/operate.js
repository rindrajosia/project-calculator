import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numbO = new Big(numberOne);
  const numbT = new Big(numberTwo);
  switch (operation) {
    case '-':
      return (numbO.minus(numbT)).c[0];
    case '+':
      return (numbO.plus(numbT)).c[0];
    case '÷':
      if (numbT !== 0) {
        return (numbO.div(numbT)).c[0];
      }
      return 'Error';

    case '%':
      return (numbO.times(numbT)).c[0];
    case 'X':
      return (numbO.multiply(numbT)).c[0];
    default: return 'Error';
  }
};

export default operate;
