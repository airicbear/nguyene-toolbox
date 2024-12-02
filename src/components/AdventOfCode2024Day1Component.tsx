import { ReactElement, useState } from "react";
import CustomAppLayout from "../layouts/CustomAppLayout";
import {
  ColumnLayout,
  Container,
  ContentLayout,
  Header,
  Textarea,
} from "@cloudscape-design/components";
import { AdventOfCode2024Day1Part1ReadInput } from "../utils/AdventOfCode2024Day1Utils";
import {
  arraySum,
  getDistances,
  mergeArrays,
} from "../utils/AdventOfCode2024Utils";

export const AdventOfCode2024Day1Component = (): ReactElement => {
  const [partOneRawInput, setPartOneRawInput] = useState("");
  const [partOneCombinedList, setPartOneCombinedList] = useState<number[]>([]);
  const [partOneCombinedListSorted, setPartOneCombinedListSorted] = useState<
    number[]
  >([]);
  const [partOneDistanceList, setPartOneDistanceList] = useState<number[]>([]);
  const [partOneOutput, setPartOneOutput] = useState(0);

  return (
    <CustomAppLayout
      breadcrumbs={[
        { text: "Advent of Code 2024", href: "/advent-of-code-2024" },
      ]}
    >
      <ContentLayout header={<Header>Advent of Code 2024</Header>}>
        <Container>
          <Header variant="h2">Day 1</Header>
          <Header variant="h3">Raw Input</Header>
          <Textarea
            value={partOneRawInput}
            onChange={(event) => {
              const input = event.detail.value;
              setPartOneRawInput(input);

              const { list1, list2 } =
                AdventOfCode2024Day1Part1ReadInput(input);

              setPartOneCombinedList(mergeArrays(list1, list2));

              const list1Sorted = list1.sort();
              const list2Sorted = list2.sort();

              setPartOneCombinedListSorted(
                mergeArrays(list1Sorted, list2Sorted)
              );

              const distances = getDistances(list1Sorted, list2Sorted);

              setPartOneDistanceList(distances);

              const distanceSum = arraySum(distances);

              setPartOneOutput(distanceSum);
            }}
          />
          <Header variant="h3">Unsorted Lists</Header>
          <ColumnLayout columns={2}>{partOneCombinedList}</ColumnLayout>
          <Header variant="h3">Sorted Lists</Header>
          <ColumnLayout columns={2}>{partOneCombinedListSorted}</ColumnLayout>
          <Header variant="h3">Distance List</Header>
          <ColumnLayout columns={1}>{partOneDistanceList}</ColumnLayout>
          <Header variant="h3">Output</Header>
          <p>{partOneOutput}</p>
        </Container>
      </ContentLayout>
    </CustomAppLayout>
  );
};
