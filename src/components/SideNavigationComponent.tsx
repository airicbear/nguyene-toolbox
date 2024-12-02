import { SideNavigation } from "@cloudscape-design/components";
import { ReactElement } from "react";

export const SideNavigationComponent = (): ReactElement => {
  return (
    <SideNavigation
      header={{
        href: "#",
        text: "Eric's Toolbox",
      }}
    />
  );
};
