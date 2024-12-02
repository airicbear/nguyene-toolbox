import { Mode } from "@cloudscape-design/global-styles";
import { createContext } from "react";

export const ModeContext = createContext({
  mode: Mode.Light,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: (_mode: Mode): void => {},
});
