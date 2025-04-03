import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";
import "@testing-library/jest-dom";
import { expect, test } from "vitest";

test("increments and decrements counter", () => {
  const { result } = renderHook(() => useCounter(5));

  act(() => result.current.increment());
  expect(result.current.count).toBe(6);

  act(() => result.current.decrement());
  expect(result.current.count).toBe(5);
});
