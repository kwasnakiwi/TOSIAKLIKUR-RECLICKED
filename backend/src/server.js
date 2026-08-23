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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API działa na porcie ${PORT}`);
});
