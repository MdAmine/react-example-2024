import { render, screen } from "@testing-library/react";
import App from "./BasicCompenent";

test("should render \"Basic Compenent\"", () => {
  render(<App />);
  expect(screen.queryByText("Basic Compenent")).toBeInTheDocument();
});
