const WORD_BOUNDARY = /(\b[a-z](?!\s))/g;

/**
 * Capitalise the first letter of each word in a string.
 */
export function capitaliseFirstLetter(value: string, lowercaseFirst?: boolean): string {
  let newValue = value;

  if (lowercaseFirst) {
    newValue = newValue.toLowerCase();
  }

  return newValue.replace(WORD_BOUNDARY, function (x) {
    return x.toUpperCase();
  });
}
