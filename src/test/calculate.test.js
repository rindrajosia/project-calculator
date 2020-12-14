import calculate from '../logic/calculate';

let data = { total: null, next: null, operation: null };
const buttonName = '1';

test('Press digit button after initialization', () => {
  const response = calculate(data, buttonName);
  expect(response).toMatchObject({ total: '0', next: '1', operation: null });
});

test('Press digit button after 1', () => {
  data = { total: null, next: '1', operation: null };
  const response = calculate(data, '2');
  expect(response).toMatchObject({ total: '0', next: '12', operation: null });
});

test('Press operator after number', () => {
  data = { total: null, next: '12', operation: null };
  const response = calculate(data, 'X');
  expect(response).toMatchObject({ total: '12', next: '0', operation: 'X' });
});

test('Press digit after operator', () => {
  data = { total: '12', next: '0', operation: 'X' };
  const response = calculate(data, '6');
  expect(response).toMatchObject({ total: '12', next: '6', operation: 'X' });
});

test('Press = after digit operator digit', () => {
  data = { total: '12', next: '6', operation: 'X' };
  const response = calculate(data, '=');
  expect(response).toMatchObject({ total: '72', next: '72', operation: null });
});

test('Press +/- after digit', () => {
  data = { total: '0', next: '6', operation: null };
  const response = calculate(data, '+/-');
  expect(response).toMatchObject({ total: -0, next: -6, operation: null });
});

test('calculate division by zero', () => {
  data = { total: '4', next: '0', operation: '÷' };
  const response = calculate(data, '=');
  expect(response).toMatchObject({ total: 'Error', next: 'Error', operation: null });
});

test('Press AC after operation', () => {
  data = { total: '4', next: '5', operation: '+' };
  const response = calculate(data, 'AC');
  expect(response).toMatchObject({ total: '0', next: '0', operation: null });
});
