import { SideNavigation } from "@cloudscape-design/components";
import { ReactElement } from "react";

export const SideNavigationComponent = (): ReactElement => {
  return (
    <SideNavigation
      header={{
        href: "#",
        text: "Eric's Toolbox",
      }}
      items={[
        {
          type: "section",
          text: "Advent of Code 2024",
          items: [
            {
              type: "link",
              text: "Day 1",
              href: "#/advent-of-code-2024/day-1",
            },
          ],
        },
      ]}
    />
  );
};
