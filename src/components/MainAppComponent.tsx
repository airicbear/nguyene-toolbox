import {
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import { ReactElement } from "react";
import { ToggleModeButtonComponent } from "./ToggleModeButtonComponent";
import CustomAppLayout from "../layouts/CustomAppLayout";

export const MainAppComponent = (): ReactElement => {
  return (
    <CustomAppLayout breadcrumbs={[]}>
      <ContentLayout header={<Header>Eric's Toolbox</Header>}>
        <Container>
          <p>Eric's Toolbox</p>
          <ToggleModeButtonComponent>Toggle Mode</ToggleModeButtonComponent>
        </Container>
      </ContentLayout>
    </CustomAppLayout>
  );
};
