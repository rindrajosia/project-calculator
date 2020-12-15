import { render } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';
import renderer from 'react-test-renderer';

test('Check if id: quote-page exist', () => {
  render(<Quote />);
  const quote = document.querySelector('#quote-page');
  expect(quote).not.toBeNull();
});

it('renders correctly', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
