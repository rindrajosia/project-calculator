import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName !== '.') {
    operation = buttonName;
    switch (buttonName) {
      case 'AC':
        total = 0;
        next = 0;
        operation = null;
        break;
      case '+':
      case '-':
      case 'X':
      case '÷':
      case '%':
        if (next !== null) {
          total = operate(parseFloat(total), parseFloat(next), operation);
        }
        operation = buttonName;
        break;
      case '=':
        if (operation !== null) {
          total = operate(parseFloat(total), parseFloat(next), operation);
        }
        break;
      case '+/-':
        total *= (-1);
        next *= (-1);
        break;
      default:
        return 'Error calculate';
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
