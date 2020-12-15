import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';
import renderer from 'react-test-renderer';

test('Check if id: calculator-page exist', () => {
  render(<Calculator />);
  const calculator = document.querySelector('#calculator-page');
  expect(calculator).not.toBeNull();
});

it('renders correctly', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
