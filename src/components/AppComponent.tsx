import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Header,
  SideNavigation,
} from "@cloudscape-design/components";
import I18nProvider from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { useState } from "react";

function AppComponent() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <I18nProvider locale="en" messages={[messages]}>
      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup items={[{ text: "Eric's Toolbox", href: "#" }]} />
        }
        navigationOpen={navigationOpen}
        onNavigationChange={(event) => setNavigationOpen(event.detail.open)}
        navigation={
          <SideNavigation
            header={{
              href: "#",
              text: "Eric's Toolbox",
            }}
          />
        }
        content={
          <ContentLayout header={<Header>Eric's Toolbox</Header>}>
            <Container>
              <p>Eric's Toolbox</p>
            </Container>
          </ContentLayout>
        }
      />
    </I18nProvider>
  );
}

export default AppComponent;
