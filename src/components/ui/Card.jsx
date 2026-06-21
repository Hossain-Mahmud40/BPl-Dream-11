import { FaFlag, FaUser } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { toast } from "react-toastify";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const isSelected = selectedPlayers.some(
    (selectedPlayer) => selectedPlayer.playerName === player.playerName,
  );

  const handleChoosePlayer = () => {
    if (isSelected) {
      toast.info(`${player.playerName} is already in your squad.`);
      return;
    }

    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin((currentCoin) => currentCoin - player.price);
    } else {
      toast.error("You don't have enough coins to select this player!");
      return;
    }

    toast.success(`${player.playerName} has been selected!`);
    setSelectedPlayers((currentPlayers) => [...currentPlayers, player]);
  };

  const bowlingText =
    player.bowlingStyle === "N/A"
      ? "Does not bowl regularly"
      : player.bowlingStyle;

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <figure className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="h-full w-full object-cover"
          />
        </figure>
        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-slate-900 shadow">
          Rating {player.rating}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-950">
            <FaUser></FaUser>
            {player.playerName}
          </h3>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            {player.playerType}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600">
          <FaFlag></FaFlag>
          <span>{player.playerCountry}</span>
        </div>

        <div className="mt-5 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 font-semibold text-slate-900">
              <MdOutlineSportsCricket /> Batting
            </span>
            <span className="text-right">{player.battingStyle}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 font-semibold text-slate-900">
              <MdOutlineSportsCricket /> Bowling
            </span>
            <span className="text-right">{bowlingText}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-black text-slate-950">
            {player.price.toLocaleString()} coins
          </p>
          <button
            onClick={handleChoosePlayer}
            className={`btn min-w-36 ${isSelected ? "bg-slate-200 text-slate-500" : "bg-slate-950 text-white hover:bg-emerald-700"}`}
            disabled={isSelected}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
