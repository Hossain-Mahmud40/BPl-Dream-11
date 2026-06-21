import { FaUser } from "react-icons/fa";
import { MdDelete, MdOutlineAddCircleOutline } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin }) => {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin((currentCoin) => currentCoin + player.price);
  };
  return (
    <section>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
            <div className="rounded-full bg-emerald-50 p-4 text-4xl text-emerald-700">
              <MdOutlineAddCircleOutline />
            </div>
            <h2 className="text-2xl font-bold text-slate-950">
              Your squad is waiting
            </h2>
            <p className="max-w-md text-slate-600">
              Open the Available tab and choose players to start building your
              BPL Dream XI.
            </p>
          </div>
        ) : (
          selectedPlayers.map((player) => {
            return (
              <div
                key={player.playerName}
                className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-20 w-20 rounded-md object-cover"
                  ></img>
                  <div className="">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950">
                      <FaUser /> {player.playerName}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {player.playerType} | {player.playerCountry}
                    </p>
                    <p className="mt-1 text-sm text-emerald-700">
                      Refund: {player.price.toLocaleString()} coins
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteSelectedPlayer(player)}
                  className="btn border-red-100 bg-red-50 text-red-600 hover:bg-red-100"
                  aria-label={`Remove ${player.playerName}`}
                >
                  <MdDelete></MdDelete>
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default SelectedPlayers;
