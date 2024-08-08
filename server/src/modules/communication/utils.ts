/**
 * @author Abhijit Baldawa
 */

/**
 * @public
 *
 * @example
 * For input ['A'] returns 'A'
 * For input ['A', 'B'] returns 'A and B'
 * For input ['A', 'B', 'C'] returns 'A, B and C'
 *
 * @param inputs
 * @returns
 */
const formatGrammatically = (inputs: string[]): string => {
  if (!inputs.length) {
    throw new Error('Input array cannot be empty');
  }

  if (inputs.some((input) => !input)) {
    throw new Error(
      'All items of input array must have at-least one character',
    );
  }

  if (inputs.length === 1) {
    return inputs[0]!;
  }

  const lastInput = inputs.at(-1)!; // elements are guaranteed to be there
  const remainingInputStr = inputs.slice(0, -1).join(', ');

  return `${remainingInputStr} and ${lastInput}`;
};

export { formatGrammatically };
