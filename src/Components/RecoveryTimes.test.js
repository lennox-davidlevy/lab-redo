import { render, screen } from '@testing-library/react';
import RecoveryTimes from './RecoveryTimes';

test('Recovery times canary', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Recovery Times/i);
  expect(linkElement).toBeInTheDocument();
});
