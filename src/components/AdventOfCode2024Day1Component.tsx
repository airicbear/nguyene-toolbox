import { ReactElement, useState } from "react";
import CustomAppLayout from "../layouts/CustomAppLayout";
import {
  ColumnLayout,
  Container,
  ContentLayout,
  Header,
  InputProps,
  NonCancelableCustomEvent,
  SpaceBetween,
  Textarea,
} from "@cloudscape-design/components";
import { AdventOfCode2024Day1Part1ReadInput } from "../utils/AdventOfCode2024Day1Utils";
import {
  arraySum,
  getDistances,
  mergeArrays,
} from "../utils/AdventOfCode2024Utils";

export const AdventOfCode2024Day1Component = (): ReactElement => {
  const [rawInput, setRawInput] = useState("");
  const [unsortedLists, setUnsortedLists] = useState<number[]>([]);
  const [sortedLists, setSortedLists] = useState<number[]>([]);
  const [distanceList, setDistanceList] = useState<number[]>([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [similarityScoresMap, setSimilarityScoresMap] = useState<number[]>([]);
  const [similarityScoresList, setSimilarityScoresList] = useState<number[]>(
    []
  );
  const [similarityScore, setSimilarityScore] = useState(0);

  const handleInput = (
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>
  ) => {
    const input = event.detail.value;

    setRawInput(input);

    const { list1: unsortedList1, list2: unsortedList2 } =
      AdventOfCode2024Day1Part1ReadInput(input);

    setUnsortedLists(mergeArrays(unsortedList1, unsortedList2));

    const sortedList1 = unsortedList1.sort();
    const sortedList2 = unsortedList2.sort();

    setSortedLists(mergeArrays(sortedList1, sortedList2));

    const distances = getDistances(sortedList1, sortedList2);

    setDistanceList(distances);

    const totalDistance = arraySum(distances);

    setTotalDistance(totalDistance);

    const unsortedList1Set = new Set(unsortedList1);
    const similarityScoreMap: { [n: number]: number } = {};

    unsortedList1Set.forEach((n) => {
      similarityScoreMap[n] = unsortedList2.filter((n2) => n2 === n).length;
    });

    const similarityScoreNumberSet = Object.keys(similarityScoreMap).map((n) =>
      parseInt(n, 10)
    );
    const similarityScoreNumberSetMapping = Object.values(similarityScoreMap);

    setSimilarityScoresMap(
      mergeArrays(similarityScoreNumberSet, similarityScoreNumberSetMapping)
    );

    const similarityScoreList = unsortedList1.map((n) => {
      return n * similarityScoreMap[n];
    });

    setSimilarityScoresList(similarityScoreList);

    const similarityScore = arraySum(similarityScoreList);

    setSimilarityScore(similarityScore);
  };

  return (
    <CustomAppLayout
      breadcrumbs={[
        { text: "Advent of Code 2024", href: "/#/advent-of-code-2024" },
        { text: "Day 1", href: "/#/advent-of-code-2024/day-1" },
      ]}
    >
      <ContentLayout header={<Header>Advent of Code 2024</Header>}>
        <Container>
          <SpaceBetween direction="vertical" size="xs">
            <Header variant="h2">Day 1</Header>
            <Header variant="h3">Raw Input</Header>
            <Textarea value={rawInput} onChange={handleInput} />
            <Header variant="h3">Unsorted Lists</Header>
            <ColumnLayout columns={2}>{unsortedLists}</ColumnLayout>
            <Header variant="h3">Sorted Lists</Header>
            <ColumnLayout columns={2}>{sortedLists}</ColumnLayout>
            <Header variant="h3">Distance List</Header>
            <ColumnLayout columns={1}>{distanceList}</ColumnLayout>
            <Header variant="h3">Total distance between two lists</Header>
            <p>{totalDistance}</p>
            <Header variant="h3">Similarity Scores Mapping</Header>
            <ColumnLayout columns={2}>{similarityScoresMap}</ColumnLayout>
            <Header variant="h3">Similarity Scores List</Header>
            <ColumnLayout columns={1}>{similarityScoresList}</ColumnLayout>
            <Header variant="h3">Similarity Score</Header>
            <p>{similarityScore}</p>
          </SpaceBetween>
        </Container>
      </ContentLayout>
    </CustomAppLayout>
  );
};
