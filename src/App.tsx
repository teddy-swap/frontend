import React from "react";
import "./App.css";
import "./index.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SwapCard from "./components/SwapCard";
import { useDarkMode } from "./contexts/index";

function App() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark bg-black" : ""} dark:bg-black`}>
      <div
        className={`bg-gradient-to-t min-h-screen p-4 ${
          darkMode
            ? "from-sky-900/50 to-cyan-800"
            : "from-emerald-100 to-emerald-100/10"
        }`}
      >
        {darkMode ? (
          <img
            src={"images/bear-with-balloons.png"}
            alt="plane with bear"
            className="absolute bottom-0 right-20 w-96"
          />
        ) : (
          <img
            src={"images/plane-with-bear.png"}
            alt="plane with bear"
            className="absolute left-10 top-40 w-96"
          />
        )}
        <ResponsiveAppBar />
        <main className="z-10 flex justify-center w-full pt-40">
          <SwapCard />
        </main>
      </div>
    </div>
  );
}

export default App;
