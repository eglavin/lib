/**
 * Capitalise the first letter of each word in a string.
 * @example
 * ```ts
 * capitaliseFirstLetter('hello world'); // 'Hello World'
 * ```
 */
export function capitaliseFirstLetter(value: string, lowercaseFirst?: boolean): string {
	let newValue = value;

	if (lowercaseFirst) {
		newValue = newValue.toLowerCase();
	}

	return newValue.replace(/(\b[a-z](?!\s))/g, function (x) {
		return x.toUpperCase();
	});
}
