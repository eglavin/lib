import { describe, it, expect, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useBrowserStorage } from "../useBrowserStorage";

describe("hooks > useBrowserStorage session storage", () => {
	afterEach(() => {
		window.sessionStorage.clear();
	});

	it("should return the default value when undefined", () => {
		const { result } = renderHook(() => useBrowserStorage("test", "test value"));
		expect(result.current[0]).toBe("test value");
	});

	it("should return value from storage when defined", () => {
		window.sessionStorage.setItem("test2", JSON.stringify("new value"));

		const { result } = renderHook(() => useBrowserStorage("test2", "test2 value"));
		expect(result.current[0]).toBe("new value");
	});

	it("should set value in storage", () => {
		const { result } = renderHook(() => useBrowserStorage("test3", "test3 value"));
		act(() => {
			result.current[1]("new value");
		});
		expect(result.current[0]).toBe("new value");
		expect(window.sessionStorage.getItem("test3")).toBe(JSON.stringify("new value"));
	});

	it("should clear value from storage", () => {
		const { result } = renderHook(() => useBrowserStorage("test4", "test4 value"));
		act(() => {
			result.current[2]();
		});
		expect(result.current[0]).toBe("test4 value");
		expect(window.sessionStorage.getItem("test4")).toBeNull();
	});
});

describe("hooks > useBrowserStorage local storage", () => {
	afterEach(() => {
		window.localStorage.clear();
	});

	it("should return the default value when undefined", () => {
		const { result } = renderHook(() => useBrowserStorage("test", "test value", "local"));
		expect(result.current[0]).toBe("test value");
	});

	it("should return value from storage when defined", () => {
		window.localStorage.setItem("test2", JSON.stringify("new value"));

		const { result } = renderHook(() => useBrowserStorage("test2", "test2 value", "local"));
		expect(result.current[0]).toBe("new value");
	});

	it("should set value in storage", () => {
		const { result } = renderHook(() => useBrowserStorage("test3", "test3 value", "local"));
		act(() => {
			result.current[1]("new value");
		});
		expect(result.current[0]).toBe("new value");
		expect(window.localStorage.getItem("test3")).toBe(JSON.stringify("new value"));
	});

	it("should clear value from storage", () => {
		const { result } = renderHook(() => useBrowserStorage("test4", "test4 value", "local"));
		act(() => {
			result.current[2]();
		});
		expect(result.current[0]).toBe("test4 value");
		expect(window.localStorage.getItem("test4")).toBeNull();
	});
});
