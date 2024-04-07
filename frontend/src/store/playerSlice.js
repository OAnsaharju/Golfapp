import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchPlayers from "../utils/fetchPlayers";

export const fetchPlayersAsync = createAsyncThunk(
  "player/fetchPlayers",
  async () => {
    return fetchPlayers();
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
      })
      .addCase(fetchPlayersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPlayers, addPlayer, deletePlayer } = playerSlice.actions;

export default playerSlice.reducer;
