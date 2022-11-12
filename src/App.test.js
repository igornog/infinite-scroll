import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText('Infinite Pagination');
  expect(linkElement).toBeInTheDocument();
});
