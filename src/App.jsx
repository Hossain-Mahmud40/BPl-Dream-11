import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import axios from "axios";
import { Suspense, useState } from "react";
import logoFooter from "./assets/logo-footer.png";

const playerPromise = axios.get("/data.json");

function App() {
  const [coin, setCoin] = useState(4000);

  const handleClaimCredit = () => {
    setCoin((currentCoin) => currentCoin + 1000);
    toast.success("1000 coins added to your wallet.");
  };

  return (
    <div className="app-shell" data-theme="light">
      <Navbar coin={coin}></Navbar>
      <Banner onClaimCredit={handleClaimCredit}></Banner>
      <Suspense
        fallback={
          <div className="container-pad flex min-h-[280px] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-emerald-600"></span>
          </div>
        }
      >
        <Players
          setCoin={setCoin}
          playerPromise={playerPromise}
          coin={coin}
        ></Players>
      </Suspense>

      <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="container-pad grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <img
              src={logoFooter}
              alt="BPL Dream XI"
              className="mb-4 h-12 w-auto"
            />
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Build your fantasy cricket squad, manage your coin balance, and
              pick the players who can carry your matchday strategy.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Squad Tools
            </h3>
            <p className="text-sm text-slate-400">Player marketplace</p>
            <p className="mt-2 text-sm text-slate-400">Budget tracking</p>
            <p className="mt-2 text-sm text-slate-400">Live selection list</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              BPL Dream XI
            </h3>
            <p className="text-sm text-slate-400">
              Professional fantasy cricket drafting experience.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
          Copyright 2026 BPL Dream XI. All rights reserved.
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2200} theme="colored" />
    </div>
  );
}

export default App;
