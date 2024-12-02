export const AdventOfCode2024Day1Part1ReadInput = (
  input: string
): { list1: number[]; list2: number[] } => {
  const result: { list1: number[]; list2: number[] } = { list1: [], list2: [] };

  const inputArray = input.split("\n");
  inputArray.forEach((item) => {
    const [n1, n2] = item.split("   ");

    result.list1.push(parseInt(n1, 10));
    result.list2.push(parseInt(n2, 10));
  });

  return { list1: result.list1, list2: result.list2 };
};
