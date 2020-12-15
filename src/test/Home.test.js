import { render } from '@testing-library/react';
import React from 'react';
import { screen } from '@testing-library/dom';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

test('Check if id: home-page exist', () => {
  render(<Home />);
  const home = document.querySelector('#home-page');
  expect(home).not.toBeNull();
});

it('renders correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
