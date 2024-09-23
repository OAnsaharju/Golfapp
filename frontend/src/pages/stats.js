import React from "react";
import StatsList from "../components/statsList";

function Stats() {
  return (
    <div
      className="flex flex-col
     justify-center items-center"
    >
      <div>
        <h2 className="text-center m-5 text-3xl">Statistics</h2>
      </div>
      <div className="flex flex-col justify-center space-between space-x-30">
        <StatsList />
      </div>
    </div>
  );
}

export default Stats;
