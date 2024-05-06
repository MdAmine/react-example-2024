import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SayHello from "./SayHello";

describe("Say Hello Component TU", () => {
  test('should render "Hello World"', () => {
    render(<SayHello />);
    expect(screen.queryByText("Hello World")).toBeInTheDocument();
  });

  test('should render "World" if the button was not clicked', () => {
    render(<SayHello />);
    expect(screen.queryByText("World", {exact: false})).toBeInTheDocument();
  });

  test('should render "Hello Technomakers" if the button was clicked', async () => {
    render(<SayHello />);

    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    expect(screen.queryByText("Hello Technomakers")).toBeInTheDocument();
    expect(screen.queryByText("Hello World")).not.toBeInTheDocument();
  });

});

