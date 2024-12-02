import { Mode } from "@cloudscape-design/global-styles";

export const getMode = (modeString: string): Mode => {
  if (modeString === "dark") {
    return Mode.Dark;
  }
  return Mode.Light;
};

export const getModeString = (mode: Mode): string => {
  if (mode === Mode.Dark) {
    return "dark";
  }
  return "light";
};
