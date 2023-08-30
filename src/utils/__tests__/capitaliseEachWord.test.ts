import { describe, expect, it } from "vitest";
import { capitaliseEachWord } from "../capitaliseEachWord";

describe("utils > capitaliseEachWord", () => {
	it("should capitalise first letters in a string", () => {
		expect(capitaliseEachWord("The quick brown fox jumps over the lazy dog")).toBe(
			"The Quick Brown Fox Jumps Over The Lazy Dog",
		);
	});

	it("should capitalise first letters in a multi line string", () => {
		expect(
			capitaliseEachWord(
				`The quick brown
fox jumps over
the lazy dog`,
			),
		).toBe(`The Quick Brown
Fox Jumps Over
The Lazy Dog`);
	});

	it("should capitalise first letters in a string with periods", () => {
		expect(capitaliseEachWord("The quick brown fox jumps.over the lazy dog".toLowerCase())).toBe(
			"The Quick Brown Fox Jumps.Over The Lazy Dog",
		);
	});
});
