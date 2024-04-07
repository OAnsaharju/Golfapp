import React, { useEffect, useState } from "react";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/players");
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/players/${id}`, {
        method: "DELETE",
      });
      setPlayers(players.filter((player) => player._id !== id));
    } catch (error) {
      console.log("Error deleting player:", error);
    }
  };

  const handleAddPlayer = async () => {
    await fetchData();
  };

  return (
    <div className="player-list">
      <h2>Player list</h2>
      {players.map((player) => (
        <div className="player-list-item" key={player._id}>
          <h4>Name:</h4> <p>{player.playerinfo.name}</p>
          <h4>Hcp: </h4> <p>{player.playerinfo.hcp}</p>
          <h4>Club:</h4> <p>{player.playerinfo.club}</p>
          <button onClick={() => handleClick(player._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
