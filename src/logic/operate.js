import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numbO = new Big(numberOne);
  const numbT = new Big(numberTwo);
  switch (operation) {
    case '-':
      return (numbO.minus(numbT)).toString();
    case '+':
      return (numbO.plus(numbT)).toString();
    case '÷':
      if (numbT.toString() === '0') {
        return 'Error';
      }
      return (numbO.div(numbT)).toString();
    case '%':
      if (numbO.times(numbT) === 0) {
        return '0';
      }
      return numbO.times(numbT).div(100).toString();
    case 'X':
      return (numbO.times(numbT)).toString();
    default: return 'Error';
  }
};

export default operate;
