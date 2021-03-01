import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application', () => {
  render(<App />);
  const headerEle = screen.getByText(/Employee Details/i);
  expect(headerEle).toBeInTheDocument();
});
