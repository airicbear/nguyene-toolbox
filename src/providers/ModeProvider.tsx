import { ReactElement, ReactNode, useEffect, useState } from "react";
import { ModeContext } from "../contexts/ModeContext";
import { applyMode, Mode } from "@cloudscape-design/global-styles";
import { getMode, getModeString } from "../utils/ModeUtils";

export interface ModeProviderProps {
  children: ReactNode;
}

export const ModeProvider = ({ children }: ModeProviderProps): ReactElement => {
  const [modeState, setModeState] = useState(Mode.Light);

  const setMode = (mode: Mode) => {
    localStorage.setItem("modeState", getModeString(mode));
    applyMode(mode);
    setModeState(mode);
  };

  useEffect(() => {
    const storedModeStateString = localStorage.getItem("modeState");

    if (storedModeStateString) {
      const storedModeState = getMode(storedModeStateString);

      if (storedModeState) {
        setMode(storedModeState);
      }
    }
  }, [modeState]);

  return (
    <ModeContext.Provider
      value={{
        mode: modeState,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
