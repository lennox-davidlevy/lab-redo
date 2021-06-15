import { render, screen } from '@testing-library/react';
import ChangeFailRate from './ChangeFailRate';

test('renders learn react link', () => {
  render(<ChangeFailRate />);
  const linkElement = screen.getByText(/Change Fail Rate/i);
  expect(linkElement).toBeInTheDocument();
});
