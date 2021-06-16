import { render, screen } from '@testing-library/react';
import Deployments from './Deployments';

test('Deployments canary', () => {
  render(<Deployments />);
  const linkElement = screen.getByText(/Deployments/i);
  expect(linkElement).toBeInTheDocument();
});
