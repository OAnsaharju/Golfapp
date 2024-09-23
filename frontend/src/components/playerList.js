import React from "react";

const PlayerList = ({ tempPlayers, onDelete }) => {
  return (
    <div className="flex flex-col justify-center items-top md:mb-20">
      <div>
        <h1 className="text-lg font-bold pb-4">Player List</h1>
      </div>
      <div className="flex flex-col p-2 border-black border rounded-lg shadow-lg bg-white justify-between items-center max-h-96 overflow-y-auto">
        {tempPlayers.map((player) => (
          <div
            className="p-2 flex justify-between items-center w-full text-black"
            key={player._id}
          >
            <p className="pr-2 underline">{player.playerinfo.name}</p>
            <button
              className="hover:underline rounded-lg border-black border border-1 p-1 text-black"
              onClick={() => onDelete(player._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
