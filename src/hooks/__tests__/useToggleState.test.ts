import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useToggleState } from "../useToggleState";

describe("hooks > useToggleState", () => {
	it("should toggle state", () => {
		const { result } = renderHook(() => useToggleState(false));

		expect(result.current[0]).toBe(false);

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(true);

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(false);
	});

	it("should set state from function call", () => {
		const { result } = renderHook(() => useToggleState(false));

		expect(result.current[0]).toBe(false);

		act(() => {
			result.current[1](true);
		});

		expect(result.current[0]).toBe(true);

		act(() => {
			result.current[1](false);
		});

		expect(result.current[0]).toBe(false);

		act(() => {
			result.current[1](false);
		});

		expect(result.current[0]).toBe(false);
	});
});
