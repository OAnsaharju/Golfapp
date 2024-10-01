import React, { useEffect } from "react";
import { fetchPlayersAsync, deletePlayerAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const StatsList = () => {
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

  const labels = [
    "hcp",
    "club",
    "wins",
    "attendance",
    "worstplacement",
    "bestscore",
    "worstscore",
  ];

  return (
    <div>
      <ul className="list-disc pl-5">
        {players.map((player) => (
          <li key={player._id} className="mb-4">
            <strong>{player.playerinfo.name}</strong>
            <ul className="list-disc pl-5 mt-2">
              {labels.map((label) => (
                <li key={label}>
                  <span className="font-semibold">{label}:</span>{" "}
                  {player.playerinfo[label] !== undefined
                    ? player.playerinfo[label]
                    : player.stats[label]}
                </li>
              ))}
              <button
                className="border-white border rounded-lg p-1 hover:bg-white hover:text-black transition duration-150"
                onClick={() => handleDelete(player._id)}
              >
                Delete
              </button>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsList;
