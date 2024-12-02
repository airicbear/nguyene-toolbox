import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { MainAppComponent } from "./components/MainAppComponent";
import { AdventOfCode2024Day1Component } from "./components/AdventOfCode2024Day1Component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainAppComponent />} />
        <Route
          path="/advent-of-code-2024/day-1"
          element={<AdventOfCode2024Day1Component />}
        />
      </Routes>
    </HashRouter>
  </StrictMode>
);
