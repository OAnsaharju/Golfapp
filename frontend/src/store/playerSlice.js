import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchPlayers from "../utils/playerApi";
import { postPlayer } from "../utils/playerApi";

export const fetchPlayersAsync = createAsyncThunk(
  "player/fetchPlayers",
  async () => {
    return fetchPlayers();
  }
);

export const addPlayerAsync = createAsyncThunk(
  "player/addPlayer",
  async (playerData) => {
    const response = await postPlayer(playerData);
    return response;
  }
);

export const deletePlayerAsync = createAsyncThunk(
  "player/deletePlayer",
  async (playerId) => {
    await fetch(`https://golfapp.onrender.com/api/players/${playerId}`, {
      method: "DELETE",
    });
    return playerId;
  }
);

const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
    loading: false,
    error: null,
  },
  reducers: {
    setPlayers(state, action) {
      state.players = action.payload;
    },
    addPlayer(state, action) {
      state.players.push(action.payload);
    },
    deletePlayer(state, action) {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlayersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.players = action.payload;
        console.log(
          "action.payload when fetching after adding: ",
          action.payload
        );
      })
      .addCase(fetchPlayersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePlayerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.players = state.players.filter(
          (player) => player.id !== action.payload
        );
      });
  },
});

export const { setPlayers, addPlayer, deletePlayer } = playerSlice.actions;

export default playerSlice.reducer;
