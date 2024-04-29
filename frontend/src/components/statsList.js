import React, { useEffect } from "react";
import { fetchPlayersAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const StatsList = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.players);

  useEffect(() => {
    dispatch(fetchPlayersAsync());
  }, [dispatch]);

  const playerLabels = ["name", "hcp", "club"];
  const statsLabels = [
    "wins",
    "attendance",
    "worstplacement",
    "bestscore",
    "worstscore",
  ];

  return (
    <div className="stat-list-container">
      <h2 className="stats-main-label">Statistics</h2>
      <div className="stat-collection">
        {[...playerLabels, ...statsLabels].map((label) => (
          <div key={label} className="player-stat-items">
            <h4>{label}</h4>
            {players.map((player) =>
              player.playerinfo[label] !== undefined ? (
                <p key={player._id}>{player.playerinfo[label]}</p>
              ) : (
                <p key={player._id}>{player.stats[label]}</p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsList;
