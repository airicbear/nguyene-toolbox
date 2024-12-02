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
  const [partTwoSimilarityScoresMap, setPartTwoSimilarityScoresMap] = useState<
    number[]
  >([]);
  const [partTwoSimilarityScoresList, setPartTwoSimilarityScoresList] =
    useState<number[]>([]);
  const [partTwoSimilarityScore, setPartTwoSimilarityScore] = useState(0);

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

              const list1Set = new Set(list1);
              const similarityScoreMap: { [n: number]: number } = {};

              list1Set.forEach((n) => {
                similarityScoreMap[n] = list2.filter((n2) => n2 === n).length;
              });

              const similarityScoreNumberSet = Object.keys(
                similarityScoreMap
              ).map((n) => parseInt(n, 10));
              const similarityScoreNumberSetMapping =
                Object.values(similarityScoreMap);

              setPartTwoSimilarityScoresMap(
                mergeArrays(
                  similarityScoreNumberSet,
                  similarityScoreNumberSetMapping
                )
              );

              console.log(similarityScoreNumberSetMapping);

              const similarityScoreList = list1.map((n) => {
                return n * similarityScoreMap[n];
              });

              setPartTwoSimilarityScoresList(similarityScoreList);

              const similarityScore = arraySum(similarityScoreList);

              setPartTwoSimilarityScore(similarityScore);
            }}
          />
          <Header variant="h3">Unsorted Lists</Header>
          <ColumnLayout columns={2}>{partOneCombinedList}</ColumnLayout>
          <Header variant="h3">Sorted Lists</Header>
          <ColumnLayout columns={2}>{partOneCombinedListSorted}</ColumnLayout>
          <Header variant="h3">Distance List</Header>
          <ColumnLayout columns={1}>{partOneDistanceList}</ColumnLayout>
          <Header variant="h3">Total distance between two lists</Header>
          <p>{partOneOutput}</p>
          <Header variant="h3">Similarity Scores Mapping</Header>
          <ColumnLayout columns={2}>{partTwoSimilarityScoresMap}</ColumnLayout>
          <Header variant="h3">Similarity Scores List</Header>
          <ColumnLayout columns={1}>{partTwoSimilarityScoresList}</ColumnLayout>
          <Header variant="h3">Similarity Score</Header>
          <p>{partTwoSimilarityScore}</p>
        </Container>
      </ContentLayout>
    </CustomAppLayout>
  );
};
