import { render, screen } from '@testing-library/react';
import Deployments from './Deployments';

test('renders learn react link', () => {
  render(<Deployments />);
  const linkElement = screen.getByText(/Deployments/i);
  expect(linkElement).toBeInTheDocument();
});
