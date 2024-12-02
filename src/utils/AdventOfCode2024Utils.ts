export function mergeArrays(list1: number[], list2: number[]) {
  const combinedList = [];
  let i = 0;
  while (i < list1.length || i < list2.length) {
    if (i < list1.length) {
      combinedList.push(list1[i]);
    }
    if (i < list2.length) {
      combinedList.push(list2[i]);
    }
    i++;
  }
  return combinedList;
}

export const getDistances = (list1: number[], list2: number[]): number[] => {
  if (list1.length != list2.length) {
    return [];
  }

  const distances = [];
  for (let i = 0; i < list1.length; i++) {
    distances.push(Math.abs(list1[i] - list2[i]));
  }
  return distances;
};

export const arraySum = (array: number[]): number => {
  return array.reduce((a, b) => a + b, 0);
};
