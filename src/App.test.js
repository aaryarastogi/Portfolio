import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio page successfully', () => {
  render(<App />);
  const nameElement = screen.getByText(/Aarya Rastogi/i);
  expect(nameElement).toBeInTheDocument();
});
