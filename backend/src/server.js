const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const playerRoutes = require("./routes/player.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/player", playerRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API działa na porcie ${PORT}`);
});
