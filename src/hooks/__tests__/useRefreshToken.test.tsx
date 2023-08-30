import { useEffect, useState } from "react";
import { describe, it, expect } from "vitest";
import { renderHook, act, render, screen, fireEvent } from "@testing-library/react";
import { useRefreshToken } from "../useRefreshToken";

describe("hooks > useRefreshToken", () => {
	it("should increase token", () => {
		const { result } = renderHook(() => useRefreshToken());

		expect(result.current[0]).toBe(0);

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(1);
	});

	it("should fire useEffect if called", () => {
		render(<TestComponent />);

		expect(screen.queryByText("Effect Called")).toBeNull();

		fireEvent.click(screen.getByText("Refresh Token"));

		expect(screen.getByText("Effect Called")).toBeDefined();
	});
});

function TestComponent() {
	const [token, refresh] = useRefreshToken();
	const [effectCalled, setEffectCalled] = useState(false);

	useEffect(() => {
		// Only fire if token is truthy
		if (token) setEffectCalled(true);
	}, [token]);

	return (
		<div>
			<span>{effectCalled ? "Effect Called" : ""}</span>
			<button onClick={() => refresh()}>Refresh Token</button>
		</div>
	);
}
