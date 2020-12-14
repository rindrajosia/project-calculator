import { render } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';

test('Check if id: quote-page exist', () => {
  render(<Quote />);
  const quote = document.querySelector('#quote-page');
  expect(quote).not.toBeNull();
});
