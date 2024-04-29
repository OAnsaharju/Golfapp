import React from "react";
import PlayerList from "../components/playerList";
import PlayerForm from "../components/playerForm";
import TeamList from "../components/teamList";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="home">
      <div className="player-container">
        <PlayerForm />
        <PlayerList />
      </div>
      <div className="team-list-container">
        <TeamList />
      </div>
      <div className="home-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
