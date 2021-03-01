import { render, screen } from '@testing-library/react';
import EmployeeDetails from './EmployeeDetails';

test('renders EmployeeDetails page', () => {
  render(<EmployeeDetails />);
  const headerEle = screen.getByText(/Employee Details/i);
  expect(headerEle).toBeInTheDocument();
});
