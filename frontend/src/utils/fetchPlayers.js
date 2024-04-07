const fetchPlayers = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/players");
    if (!response.ok) {
      throw new Error("failed to fetch players");
    }

    return response.json();
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export default fetchPlayers;
