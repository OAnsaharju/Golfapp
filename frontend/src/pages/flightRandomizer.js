import React, { useEffect, useState } from "react";
import PlayerList from "../components/playerList";
import PlayerForm from "../components/playerForm";
import TeamList from "../components/teamList";
import { fetchPlayersAsync } from "../store/playerSlice";
import { useDispatch, useSelector } from "react-redux";

function FlightRandomizer() {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.players);
  const [tempPlayers, setTempPlayers] = useState([]);

  useEffect(() => {
    dispatch(fetchPlayersAsync());
  }, [dispatch]);

  useEffect(() => {
    if (tempPlayers.length === 0 && players.length > 0) {
      setTempPlayers(players);
    }
  }, [players, tempPlayers.length]);

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
