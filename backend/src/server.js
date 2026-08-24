const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const playerRoutes = require("./routes/player.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://tosiaklikur-reclicked.netlify.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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