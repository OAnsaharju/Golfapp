import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../store/playerSlice";

export const PlayerForm = ({ player }) => {
  const dispatch = useDispatch();

  //Player info states

  const [name, setName] = useState("");
  const [hcp, setHcp] = useState("");
  const [club, setClub] = useState("");

  // Stats states
  const [wins, setWins] = useState("");
  const [attendance, setAttendance] = useState("");
  const [worstplacement, setWorstplacement] = useState("");
  const [bestscore, setBestscore] = useState("");
  const [worstscore, setWorstscore] = useState("");

  //handle Submit function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerData = {
      playerinfo: { name, hcp, club },
      stats: { wins, attendance, worstplacement, bestscore, worstscore },
    };

    console.log("Payload being dispatched: ", playerData);

    dispatch(addPlayer(playerData));

    setName("");
    setHcp("");
    setClub("");
    setWins("");
    setAttendance("");
    setWorstplacement("");
    setBestscore("");
    setWorstscore("");
  };
  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h1>Player form</h1>
      <label className="form-label">
        Name:
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="form-label">
        Hcp:
        <input
          type="number"
          required
          value={hcp}
          onChange={(e) => setHcp(e.target.value)}
        />
      </label>

      <label className="form-label">
        Club:{" "}
        <input
          type="text"
          required
          value={club}
          onChange={(e) => setClub(e.target.value)}
        />
      </label>

      <label className="form-label">
        Wins: * not required
        <input
          type="number"
          value={wins}
          onChange={(e) => setWins(e.target.value)}
        />
      </label>

      <label className="form-label">
        Attendance: * not required
        <input
          type="number"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />
      </label>

      <label className="form-label">
        Worst Placement: * not required
        <input
          type="number"
          value={worstplacement}
          onChange={(e) => setWorstplacement(e.target.value)}
        />
      </label>

      <label className="form-label">
        Best Score: * not required
        <input
          type="number"
          value={bestscore}
          onChange={(e) => setBestscore(e.target.value)}
        />
      </label>

      <label className="form-label">
        Worst Score: * not required
        <input
          type="number"
          value={worstscore}
          onChange={(e) => setWorstscore(e.target.value)}
        />
      </label>

      <button>Add Player</button>
    </form>
  );
};

export default PlayerForm;
