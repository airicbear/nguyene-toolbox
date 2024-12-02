import { Button } from "@cloudscape-design/components";
import { ReactElement, ReactNode, useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";
import { Mode } from "@cloudscape-design/global-styles";

export interface ToggleModeButtonComponentProps {
  children: ReactNode;
}

export const ToggleModeButtonComponent = ({
  children,
}: ToggleModeButtonComponentProps): ReactElement => {
  const { mode, setMode } = useContext(ModeContext);

  return (
    <Button
      onClick={() => setMode(mode === Mode.Light ? Mode.Dark : Mode.Light)}
    >
      {children}
    </Button>
  );
};
