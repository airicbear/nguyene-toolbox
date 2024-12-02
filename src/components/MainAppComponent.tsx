import { AppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import I18nProvider from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { useState } from "react";

import "../styles/base.scss";
import { ModeProvider } from "../providers/ModeProvider";
import { SideNavigationComponent } from "./SideNavigationComponent";
import { MainAppContentComponent } from "./MainAppContentComponent";

function MainAppComponent() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <I18nProvider locale="en" messages={[messages]}>
      <ModeProvider>
        <AppLayout
          toolsHide={true}
          breadcrumbs={
            <BreadcrumbGroup
              items={[{ text: "Eric's Toolbox", href: "/hello" }]}
            />
          }
          navigationOpen={navigationOpen}
          onNavigationChange={(event) => setNavigationOpen(event.detail.open)}
          navigation={<SideNavigationComponent />}
          content={<MainAppContentComponent />}
        />
      </ModeProvider>
    </I18nProvider>
  );
}

export default MainAppComponent;
