import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Movie Finder/i);
  expect(titleElement).toBeInTheDocument();
});
test('renders form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Get movie/i);
  expect(linkElement).toBeInTheDocument();
});
