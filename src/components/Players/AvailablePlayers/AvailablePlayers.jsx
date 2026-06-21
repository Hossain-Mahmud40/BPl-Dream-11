import Card from "../../ui/Card";

const AvailablePlayers = ({
  playersData,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {playersData.map((player) => {
        return (
          <Card
            key={player.playerName}
            player={player}
            setCoin={setCoin}
            coin={coin}
            setSelectedPlayers={setSelectedPlayers}
            selectedPlayers={selectedPlayers}
          ></Card>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
