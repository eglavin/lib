import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
	it("should render the Button component", () => {
		const { baseElement } = render(<Button label="Hello world!" />);

		expect(baseElement).toMatchSnapshot();
	});

	it("should have label content", () => {
		const TEST_LABEL = "Hello world!";

		render(<Button label={TEST_LABEL} />);

		expect(screen.getByRole("button", { name: TEST_LABEL })).toBeDefined();
	});
});
