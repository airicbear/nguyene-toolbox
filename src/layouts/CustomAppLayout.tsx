import { AppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import I18nProvider from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { ReactNode, useState } from "react";

import "../styles/base.scss";
import { ModeProvider } from "../providers/ModeProvider";
import { SideNavigationComponent } from "../components/SideNavigationComponent";

export interface CustomAppLayoutProps {
  children: ReactNode;
  breadcrumbs: {
    text: string;
    href: string;
  }[];
}

function CustomAppLayout({ children, breadcrumbs }: CustomAppLayoutProps) {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <I18nProvider locale="en" messages={[messages]}>
      <ModeProvider>
        <AppLayout
          toolsHide={true}
          breadcrumbs={
            <BreadcrumbGroup
              items={[{ text: "Eric's Toolbox", href: "/" }, ...breadcrumbs]}
            />
          }
          navigationOpen={navigationOpen}
          onNavigationChange={(event) => setNavigationOpen(event.detail.open)}
          navigation={<SideNavigationComponent />}
          content={children}
        />
      </ModeProvider>
    </I18nProvider>
  );
}

export default CustomAppLayout;
