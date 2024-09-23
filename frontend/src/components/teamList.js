import React, { useState } from "react";
import formTeams from "../utils/formTeams";

const TeamList = ({ tempPlayers }) => {
  const [teams, setTeams] = useState([]);

  const handleRandomize = () => {
    if (tempPlayers.length === 0) {
      console.log("No players available to form teams");
      return;
    }

    // Form teams from the temporary players.
    const formedTeams = formTeams(tempPlayers);
    setTeams(formedTeams);
  };

  return (
    <div className="flex flex-col p-4">
      <button
        className="font-semibold text-1xl text-black border-black border hover:underline rounded-lg shadow-lg
        bg-white p-2 mb-2"
        onClick={handleRandomize}
      >
        Randomize
      </button>
      <div>
        <ul className="p-4 flex flex-col justify-center items-center rounded-lg shadow-lg bg-white text-black">
          <div>
            <p>Randomized Flights</p>
          </div>
          <div className="flex flex-col md:flex-row">
            {teams &&
              teams.map((team, index) => (
                <div className="p-2" key={index}>
                  <li className="p-4">
                    <h3 className="underline">Flight {index + 1}</h3>
                    <ul className="team-list-unit">
                      {team.map((player, playerIndex) => (
                        <li key={playerIndex}>{player.playerinfo.name}</li>
                      ))}
                    </ul>
                  </li>
                </div>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TeamList;
