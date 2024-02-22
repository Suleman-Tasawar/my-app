import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders name', () => {
  render(<App />);
  const linkElement = screen.getByText("Greet");
  expect(linkElement).toBeInTheDocument();
});
