import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button add employee', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button',{name:/add employee/i});
  expect(buttonElement).toBeInTheDocument();
});
