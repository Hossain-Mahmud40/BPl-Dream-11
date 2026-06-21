import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const playersDataRes = use(playerPromise);
  const playersData = playersDataRes.data;
  const [selectedType, setSelectedType] = useState("available");

  const totalSquadValue = selectedPlayers.reduce(
    (total, player) => total + player.price,
    0,
  );

  return (
    <main id="players" className="container-pad my-14">
      <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Player marketplace
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">
            {selectedType === "available"
              ? "Available Players"
              : `Selected Squad (${selectedPlayers.length}/${playersData.length})`}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Wallet: {coin.toLocaleString()} coins | Squad value:{" "}
            {totalSquadValue.toLocaleString()} coins
          </p>
        </div>
        <div
          id="selected"
          className="join justify-self-start lg:justify-self-end"
        >
          <button
            onClick={() => setSelectedType("available")}
            className={`btn join-item ${selectedType === "available" ? "bg-[#E7FE29] text-slate-950" : "bg-white"}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn join-item ${selectedType === "selected" ? "bg-[#E7FE29] text-slate-950" : "bg-white"}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          setCoin={setCoin}
          playersData={playersData}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></SelectedPlayers>
      )}
    </main>
  );
};

export default Players;
