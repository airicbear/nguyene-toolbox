import { ReactElement, useState } from "react";
import CustomAppLayout from "../layouts/CustomAppLayout";
import {
  ColumnLayout,
  Container,
  ContentLayout,
  ExpandableSection,
  Header,
  InputProps,
  NonCancelableCustomEvent,
  SpaceBetween,
  Textarea,
} from "@cloudscape-design/components";
import { readWhitespaceDelimitedInput } from
  "../utils/AdventOfCode2024InputParsingUtils";
import {
  arraySum,
  getDistances,
  mergeArrays,
} from "../utils/AdventOfCode2024Utils";

type SimilarityScoreMap = { [key: number]: number };

interface CalculationResults {
  unsortedLists: number[];
  sortedLists: number[];
  distanceList: number[];
  totalDistance: number;
  similarityScoresMap: SimilarityScoreMap;
  similarityScoresList: number[];
  similarityScore: number;
}

const calculateResults = (input: string): CalculationResults => {
  const { list1: unsortedList1, list2: unsortedList2 } =
    readWhitespaceDelimitedInput(input);

  const unsortedLists = mergeArrays(unsortedList1, unsortedList2);
  const sortedList1 = unsortedList1.slice().sort();
  const sortedList2 = unsortedList2.slice().sort();
  const sortedLists = mergeArrays(sortedList1, sortedList2);

  const distanceList = getDistances(sortedList1, sortedList2);
  const totalDistance = arraySum(distanceList);

  const unsortedList1Set = new Set(unsortedList1);
  const similarityScoresMap: SimilarityScoreMap = {};
  unsortedList1Set.forEach((n) => {
    similarityScoresMap[n] = unsortedList2.filter((n2) => n2 === n).length;
  });

  const similarityScoresList = unsortedList1.map(
    (n) => n * (similarityScoresMap[n] || 0)
  );
  const similarityScore = arraySum(similarityScoresList);

  return {
    unsortedLists,
    sortedLists,
    distanceList,
    totalDistance,
    similarityScoresMap,
    similarityScoresList,
    similarityScore
  };
}

export const AdventOfCode2024Day1Component = (): ReactElement => {
  const [rawInput, setRawInput] = useState("");
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInput = (
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>
  ) => {
    const input = event.detail.value;

    setRawInput(input);
    setResults(calculateResults(input));
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
            <p>
              Given a text input of two whitespace-delimited columns of numbers,
              sort each list and get the sum of the distance between each
              number, shown as the <strong>Total Distance</strong>.
            </p>

            <p>
              Next, for each number in the first column, count the occurrences
              in which it appears in the second column, and multiply the number
              by the occurrence count. The sum of the products
              of each number and its occurrence count is shown as the{" "}
              <strong>similarity score</strong>.
            </p>

            <Textarea value={rawInput} onChange={handleInput} />

            {results && (
              <>
                <ExpandableSection headerText="Unsorted Lists">
                  <ColumnLayout columns={2}>
                    {results.unsortedLists.map((n, i) => (
                      <p key={`unsorted-${i}`}>{n}</p>
                    ))}
                  </ColumnLayout>
                </ExpandableSection>

                <ExpandableSection headerText="Sorted Lists">
                  <ColumnLayout columns={2}>
                    {results.sortedLists.map((n, i) => (
                      <p key={`sorted-${i}`}>{n}</p>
                    ))}
                  </ColumnLayout>
                </ExpandableSection>

                <ExpandableSection headerText="Distance List">
                  <ColumnLayout columns={1}>
                    {results.distanceList.map((n, i) => (
                      <p key={`distance-${i}`}>{n}</p>
                    ))}
                  </ColumnLayout>
                </ExpandableSection>

                <ExpandableSection headerText="Total Distance">
                  <p>{results.totalDistance}</p>
                </ExpandableSection>

                <ExpandableSection headerText="Similarity Scores Mapping">
                  <ColumnLayout columns={1}>
                    {Object.entries(results.similarityScoresMap).map(
                      ([key, value], i) => (
                        <p key={`scoremap-${i}`}>
                          {key}: {value}
                        </p>
                      )
                    )}
                  </ColumnLayout>
                </ExpandableSection>

                <ExpandableSection headerText="Similarity Scores List">
                  <ColumnLayout columns={1}>
                    {results.similarityScoresList.map((n, i) => (
                      <p key={`scorelist-${i}`}>{n}</p>
                    ))}
                  </ColumnLayout>
                </ExpandableSection>

                <ExpandableSection headerText="Similarity Score">
                  <p>{results.similarityScore}</p>
                </ExpandableSection>
              </>
            )}
          </SpaceBetween>
        </Container>
      </ContentLayout>
    </CustomAppLayout>
  );
};
