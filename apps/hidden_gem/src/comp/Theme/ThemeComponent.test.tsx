import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import ThemeComponent from "./ThemeComponent";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

test("toggles theme on button click", () => {
  render(
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );

  const button = screen.getByText("Toggle Theme");
  
  // Initial theme is light
  expect(screen.getByText("Current Theme: light")).toBeInTheDocument();

  fireEvent.click(button);

  // Theme should change to dark
  expect(screen.getByText("Current Theme: dark")).toBeInTheDocument();
});

