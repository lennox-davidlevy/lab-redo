import { render, screen } from '@testing-library/react';
import LeadTimes from './LeadTimes';

test('renders learn react link', () => {
  render(<LeadTimes />);
  const linkElement = screen.getByText(/Lead Times/i);
  expect(linkElement).toBeInTheDocument();
});
