import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

test("renders Hello component with a name", () => {
  render(<Hello name="John" />);
  expect(screen.getByText("Hello, John!")).toBeInTheDocument();
});