import shuffleArray from "./shuffleArray";

const formTeams = (players) => {
  // using the shuffleArray to randomize players that will be fetched.
  const shuffledPlayers = shuffleArray([...players]);

  const teams = [];
  let currentTeam = [];

  // using the randomized player array to form teams of 4 max
  shuffledPlayers.forEach((player, index) => {
    currentTeam.push(player);

    if (currentTeam.length === 4 || index === shuffledPlayers.length - 1) {
      teams.push([...currentTeam]);
      currentTeam = [];
    }
  });
  return teams;
};

export default formTeams;
