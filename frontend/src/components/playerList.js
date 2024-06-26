import React, { useEffect } from "react";
import { fetchPlayersAsync, deletePlayerAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const PlayerList = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.players);

  useEffect(() => {
    dispatch(fetchPlayersAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePlayerAsync(id)).then(() => {
      dispatch(fetchPlayersAsync());
    });
  };

  return (
    <div className="player-list">
      <h2>Player list</h2>
      <div className="player-list-labels">
        <h4>Name:</h4>
        <h4>Hcp:</h4>
        <h4>Club:</h4>
        <h4>Remove :</h4>
      </div>
      {players.map((player) => (
        <div className="player-list-item" key={player._id}>
          <p>{player.playerinfo.name}</p>
          <p>{player.playerinfo.hcp}</p>
          <p>{player.playerinfo.club}</p>
          <button onClick={() => handleDelete(player._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
