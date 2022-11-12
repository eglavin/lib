import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render the Button component", () => {
    render(<Button label="Hello world!" />);
  });

  it("should have label content", () => {
    const TEST_LABEL = "Hello world!";

    render(<Button label={TEST_LABEL} />);

    expect(screen.getByRole("button", { name: TEST_LABEL })).toBeDefined();
  });
});
