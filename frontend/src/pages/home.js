import React from "react";
import PlayerList from "../components/playerList";
import PlayerForm from "../components/playerForm";
import TeamList from "../components/teamList";

function Home() {
  return (
    <div>
      <PlayerForm />
      <PlayerList />
      <TeamList />
    </div>
  );
}

export default Home;
