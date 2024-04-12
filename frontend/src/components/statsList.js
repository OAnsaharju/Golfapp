import React, { useEffect } from "react";
import { fetchPlayersAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const StatsList = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.players);

  useEffect(() => {
    dispatch(fetchPlayersAsync());
  }, [dispatch]);

  return (
    <div className="stat-list-container">
      <h2>statistics</h2>
      {players.map((player) => (
        <div className="player-stat-list" key={player._id}>
          <h4>Name:</h4> <p>{player.playerinfo.name}</p>
          <h4>Hcp:</h4> <p>{player.playerinfo.hcp}</p>
          <h4>Club:</h4> <p>{player.playerinfo.club}</p>
          <h4>Wins:</h4> <p>{player.stats.wins}</p>
          <h4>Attendance:</h4> <p>{player.stats.attendance}</p>
          <h4>Worst placement:</h4> <p>{player.stats.worstplacement}</p>
          <h4>Best score:</h4> <p>{player.stats.bestscore}</p>
          <h4>Worst score:</h4> <p>{player.stats.worstscore}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsList;
