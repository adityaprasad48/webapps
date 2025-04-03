import { render, screen, waitFor } from "@testing-library/react";
import User from "./User";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { vi } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "John Doe" }),
  })
) as jest.Mock

test("fetches and displays user data", async () => {
  render(<User />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText("John Doe")).toBeInTheDocument());
});
