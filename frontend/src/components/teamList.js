import React, { useState } from "react";
import fetchPlayers from "../utils/playerApi";
import formTeams from "../utils/formTeams";

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  const handleRandomize = async () => {
    try {
      //fetch players from db.
      const players = await fetchPlayers();
      //form teams from the fetched players.
      const formedTeams = formTeams(players);
      setTeams(formedTeams);
    } catch (error) {
      console.log("Error fetching players ofr forming teams", error);
    }
  };

  return (
    <div className="team-list">
      <button onClick={handleRandomize}>Randomize</button>
      <div>
        <ul className="team-list-collection">
          {teams &&
            teams.map((team, index) => (
              <li className="team-list-team-unit" key={index}>
                <h3>Flight {index + 1}</h3>
                <ul className="team-list-unit">
                  {team.map((player, index) => (
                    <li key={index}>{player.playerinfo.name}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default TeamList;
