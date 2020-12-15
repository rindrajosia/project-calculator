import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (total === null) total = '0';

  if (total !== 'Error' || (next === null && !digits.includes(buttonName))) {
    if (digits.includes(buttonName)) {
      if (next !== null) next = next.toString();
      if (buttonName === '.') {
        next = next === null ? `${0}${buttonName}` : `${next}${buttonName}`;
      } else if (next === null || next === '0' || next === total) {
        next = buttonName;
      } else {
        next = `${next}${buttonName}`;
      }
    } else {
      switch (buttonName) {
        case 'AC':
          total = '0';
          next = '0';
          operation = null;
          break;
        case '+':
        case '-':
        case 'X':
        case '÷':
        case '%':

          next = next.toString();
          if (total !== next) {
            if (total === '0') {
              total = next;
              next = '0';
            } else {
              next = operate(parseFloat(total), parseFloat(next), operation);
              total = next;
            }
          } else {
            next = '0';
          }
          operation = buttonName;

          break;
        case '=':

          if (operation !== null) {
            next = operate(parseFloat(total), parseFloat(next), operation);
            total = next;
            operation = null;
          }

          break;
        case '+/-':
          total *= (-1);
          next *= (-1);
          break;
        default:
          return 'Error';
      }
    }
  } else {
    total = 'Error';
    next = 'Error';
    operation = null;
  }

  if (buttonName === 'AC') {
    total = '0';
    next = '0';
    operation = null;
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
