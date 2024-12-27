/**
 * Input parsing utility for two lists of numbers.
 * 
 * @param input The string input.
 * @returns The two list of numbers as a map.
 */
export const readWhitespaceDelimitedInput = (
  input: string
): { list1: number[]; list2: number[] } => {
  const result: { list1: number[]; list2: number[] } = { list1: [], list2: [] };

  const inputArray = input.split("\n");
  inputArray.forEach((item) => {
    const [n1, n2] = item.split(/\s+/);

    result.list1.push(parseInt(n1, 10));
    result.list2.push(parseInt(n2, 10));
  });

  return { list1: result.list1, list2: result.list2 };
};
