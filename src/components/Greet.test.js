import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Greet");
    expect(textElement).toBeInTheDocument();
  });

  test("with the name", () => {
    render(<Greet name="Suleman" />);
    const nameGreet = screen.getByText("Greet Suleman");
    expect(nameGreet).toBeInTheDocument();
  });
});
