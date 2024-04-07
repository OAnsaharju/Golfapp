const express = require("express");
const mongoose = require("mongoose");
const playerRoutes = require("./routes/playerRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
port = 4000;
app.use(express.json());
// Database

const database = (module.exports = () => {
  try {
    mongoose.connect(
      "mongodb+srv://oansaharju:XjC0Jm7YJnYuPyNl@golfapp.wlauh80.mongodb.net/?retryWrites=true&w=majority&appName=GolfApp"
    );
    console.log("Server Connected");
  } catch (error) {
    console.log("Error", error);
  }
});

app.use("/api", playerRoutes);

database();

app.listen(port, () => {
  console.log("Server listening on port http://localhost:4000");
});
