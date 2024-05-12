const postPlayer = async (playerData) => {
  try {
    const response = await fetch("https://golfapp.onrender.com/api/players", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      throw new Error("Failed to add player");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding player:", error);
    throw error;
  }
};

const fetchPlayers = async () => {
  try {
    const response = await fetch("https://golfapp.onrender.com/api/players");
    if (!response.ok) {
      throw new Error("failed to fetch players");
    }

    return response.json();
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export default fetchPlayers;

export { postPlayer };
