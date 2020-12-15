import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Check if id: calculator-page exist', () => {
  render(<Calculator />);
  const calculator = document.querySelector('#calculator-page');
  expect(calculator).not.toBeNull();
});

it('renders correctly', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
