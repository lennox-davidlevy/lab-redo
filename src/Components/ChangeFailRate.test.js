import { render, screen } from '@testing-library/react';
import ChangeFailRate from './ChangeFailRate';

test('Change Fail Rate canary', () => {
  render(<ChangeFailRate />);
  const linkElement = screen.getByText(/Change Fail Rate/i);
  expect(linkElement).toBeInTheDocument();
});
