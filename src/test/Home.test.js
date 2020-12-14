import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/dom';
import Home from '../components/Home';

test('Check if id: home-page exist', () => {
  render(<Home />);
  const home = document.querySelector('#home-page');
  expect(home).not.toBeNull();
});

test('Check if title:Welcome to our page exist', () => {
  render(<Home />);
  const title = screen.getByText('Welcome to our page');
  expect(title).toBeInTheDocument();
});
