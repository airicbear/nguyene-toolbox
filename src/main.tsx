import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainAppComponent from "./components/MainAppComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainAppComponent />
  </StrictMode>
);
