import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`mounts header with text 'players'`, () => {
  const { getByText } = render(<App />);

  const header = getByText(/players/i);

  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
  expect(header).toBeTruthy();
})

test(`toggle button appears on screen`, () => {
  const { getByText } = render(<App />);

  const button = getByText(/toggle/i);

  expect(button).toBeInTheDocument();
  expect(button).toBeVisible();
})