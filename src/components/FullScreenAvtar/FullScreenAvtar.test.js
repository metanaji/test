import { render, screen } from '@testing-library/react';
import FullScreenAvtar from './FullScreenAvtar';
const mockAvtar = "https://picsum.photos/seed/543/64/64.jpg";

test('renders FullScreenAvtar popup', () => {
  render(<FullScreenAvtar showModalBollean={true} imagePath={mockAvtar} />);
  const closeLink = screen.getByText(/Close/i);
  expect(closeLink).toBeInTheDocument();
});
