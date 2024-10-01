import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayerAsync, fetchPlayersAsync } from "../store/playerSlice";

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

    await dispatch(addPlayerAsync(playerData));
    dispatch(fetchPlayersAsync());
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
    <form
      className="md:w-[80%] flex flex-col justify-center items-center md:mb-20 mt-20"
      onSubmit={handleSubmit}
    >
      <ul className=" p-2 space-y-1">
        <li>
          <h2 className="text-lg font-bold">Player form</h2>
          <p className="text-sm text-gray-500">* = not required</p>
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Name:</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Hcp:</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            required
            value={hcp}
            onChange={(e) => setHcp(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Club:</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="text"
            required
            value={club}
            onChange={(e) => setClub(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Wins: *</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            value={wins}
            onChange={(e) => setWins(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Attendance: *</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Worst Placement: *</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            value={worstplacement}
            onChange={(e) => setWorstplacement(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Best Score: *</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            value={bestscore}
            onChange={(e) => setBestscore(e.target.value)}
          />
        </li>

        <li className="flex items-center">
          <label className="w-2/4 text-left">Worst Score: *</label>
          <input
            className="flex-grow text-black border border-black rounded-lg shadow-lg p-2 ml-4"
            type="number"
            value={worstscore}
            onChange={(e) => setWorstscore(e.target.value)}
          />
        </li>
      </ul>

      <button
        className="border-black text-black border rounded-lg shadow-lg
      m-2 p-2 hover:underline bg-white"
      >
        Add Player
      </button>
    </form>
  );
};

export default PlayerForm;
