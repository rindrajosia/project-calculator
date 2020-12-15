import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import App from '../components/App';

test('Check if navbar exist', () => {
  render(<App />);
  const navbar = document.querySelector('#navbar');
  expect(navbar).not.toBeNull();
});

test('Click on home link', () => {
  render(<App />);
  const leftClick = { button: 0 };
  userEvent.click(document.querySelector('#home'), leftClick);
  const home = document.querySelector('#home-page');
  expect(home).not.toBeNull();
});

test('Click on calculator link', () => {
  render(<App />);
  const leftClick = { button: 0 };
  userEvent.click(document.querySelector('#calculator'), leftClick);
  const calculator = document.querySelector('#calculator-page');
  expect(calculator).not.toBeNull();
});

test('Click on quote link', () => {
  render(<App />);
  const leftClick = { button: 0 };
  userEvent.click(document.querySelector('#quote'), leftClick);
  const quote = document.querySelector('#quote-page');
  expect(quote).not.toBeNull();
});

it('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
