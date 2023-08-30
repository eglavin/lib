/**
 * Capitalise the first letter of each word in a given string.
 * @example
 * ```ts
 * capitaliseEachWord('hello world'); // 'Hello World'
 * ```
 */
export function capitaliseEachWord(value: string): string {
	return value.replace(/(\b[a-z](?!\s))/g, function capitaliseLetter(letter) {
		return letter.toUpperCase();
	});
}
