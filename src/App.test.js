import { render, screen } from '@testing-library/react';
import App from './App';

describe("Render Demon Slayers names",()=>{

  test('Renders Tanjiro', () => {
    render(<App />);
    const linkElement = screen.getByText("Tanjiro Kamado");
    expect(linkElement).toBeInTheDocument();
  });
  test('Renders Tanjiro', () => {
    render(<App />);
    const linkElement = screen.getByText("Tanjiro Kamado");
    expect(linkElement).toBeInTheDocument();
  });
  test('Renders Zenitsu Agatsuma', () => {
    render(<App />);
    const linkElement = screen.getByText("Zenitsu Agatsuma");
    expect(linkElement).toBeInTheDocument();
  });
  test('Renders Inosuke Hashibira', () => {
    render(<App />);
    const linkElement = screen.getByText("Inosuke Hashibira");
    expect(linkElement).toBeInTheDocument();
  });
  

})
