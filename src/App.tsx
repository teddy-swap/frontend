import React from "react";
import "./App.css";
import "./index.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SwapCard from "./components/SwapCard";
import { useDarkMode } from "./contexts/index";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Liquidity from "./routes/Liquidity";
import AddLiquidity from "./routes/AddLiquidity";
import RemoveLiquidity from "./routes/RemoveLiquidity";
import History from "./routes/History";
import Farm from "./routes/Farm";
import Orders from "./routes/Orders";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : ""} dark:bg-black`}>
      <div
        className={`bg-gradient-to-tr min-h-screen p-4 ${
          darkMode
            ? "from-sky-900/50 via-sky-900/70 to-cyan-800"
            : "from-emerald-100 to-emerald-100/10"
        }`}
      >
        {darkMode ? (
          <img
            src={"/images/bear-with-balloons.png"}
            alt="plane with bear"
            className="fixed bottom-0 right-20 w-96"
          />
        ) : (
          <img
            src={"/images/plane-with-bear.png"}
            alt="plane with bear"
            className="absolute left-10 top-40 w-96"
          />
        )}
        <BrowserRouter>
          <ResponsiveAppBar />
          <main className="z-10 flex justify-center w-full pt-40">
            <Routes>
              <Route path="/" element={<SwapCard />} />
              <Route path="/swap" element={<SwapCard />} />
              <Route path="/liquidity" element={<Liquidity />} />
              <Route path="/liquidity/add" element={<AddLiquidity />} />
              <Route path="/liquidity/remove" element={<RemoveLiquidity />} />
              <Route path="/farm" element={<Farm />} />
              <Route path="/history" element={<History />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
