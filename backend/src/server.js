const express = require("express");
const cors = require("cors");

const playerRoutes = require("./routes/player.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/player", playerRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log("API działa na http://localhost:3000");
});
