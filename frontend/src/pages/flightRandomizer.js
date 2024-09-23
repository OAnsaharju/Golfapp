import React, { useEffect, useState } from "react";
import PlayerList from "../components/playerList";
import PlayerForm from "../components/playerForm";
import TeamList from "../components/teamList";
import { fetchPlayersAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

function FlightRandomizer() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.players); //fetch the actual list from redux store
  const [tempPlayers, setTempPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      await dispatch(fetchPlayersAsync());
      // Set tempPlayers so we can form custom list for
      // randomizing the teams without deleting
      // data from the actual database
      if (tempPlayers.length === 0) {
        setTempPlayers(players);
      }
    };
    loadPlayers();
  }, [dispatch, players, tempPlayers.length]);

  // Handle delete player from tempPlayers
  const handleDelete = (id) => {
    setTempPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player._id !== id)
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:flex justify-center items-center">
        <div>
          <PlayerForm />
        </div>
        <div>
          <PlayerList tempPlayers={tempPlayers} onDelete={handleDelete} />
        </div>
      </div>

      <TeamList tempPlayers={tempPlayers} />
    </div>
  );
}

export default FlightRandomizer;
