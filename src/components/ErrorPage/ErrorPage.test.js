import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

test('renders Error page', () => {
  render(<ErrorPage />);
  const errorTtl = screen.getByText(/Something went Wrong!!!/i);
  expect(errorTtl).toBeInTheDocument();
});
