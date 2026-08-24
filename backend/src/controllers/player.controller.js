const pool = require("../db/pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getPlayer = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM players WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Gracz nieznaleziony",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Błąd bazy danych",
    });
  }
};

const createPlayer = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      error: "Nazwa użytkownika jest wymagana",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(400).json({
      error: "Hasło jest wymagane",
    });
  }

  const cleanUsername = username.trim();

  if (cleanUsername.length < 3) {
    return res.status(400).json({
      error: "Nazwa użytkownika musi mieć conajmniej 3 znaki",
    });
  }

  if (cleanUsername.length > 20) {
    return res.status(400).json({
      error: "Nazwa użytkownika nie może mieć więcej niż 20 znaków",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Hasło musi mieć conajmniej 6 znaków",
    });
  }

  try {
    const existingPlayer = await pool.query(
      "SELECT id FROM players WHERE username = $1",
      [cleanUsername],
    );

    if (existingPlayer.rows.length > 0) {
      return res.status(409).json({
        error: "Użytkownik o takiej nazwie już istnieje",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO players (username, password_hash)
       VALUES ($1, $2)
       RETURNING id, username, clicks, coins, created_at`,
      [cleanUsername, passwordHash],
    );

    const player = result.rows[0];

    const token = jwt.sign(
      {
        userId: player.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(player);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Błąd bazy danych",
    });
  }
};

const loginPlayer = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      error: "Nazwa użytkownika jest wymagana",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(400).json({
      error: "Hasło jest wymagane",
    });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM players WHERE username = $1",
      [username.trim()],
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        error: "Nieprawidłowa nazwa użytkownika lub hasło",
      });
    }

    const player = result.rows[0];

    const passwordCorrect = await bcrypt.compare(
      password,
      player.password_hash,
    );

    if (!passwordCorrect) {
      return res.status(401).json({
        error: "Nieprawidłowa nazwa użytkownika lub hasło",
      });
    }

    const token = jwt.sign(
      {
        userId: player.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      id: player.id,
      username: player.username,
      clicks: player.clicks,
      coins: player.coins,
      created_at: player.created_at,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Błąd bazy danych",
    });
  }
};

const clickPlayer = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query(
      `UPDATE players
             SET clicks = clicks + 1
             WHERE id = $1
             RETURNING *`,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Gracz nieznaleziony",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Błąd bazy danych",
    });
  }
};

module.exports = {
  getPlayer,
  createPlayer,
  clickPlayer,
  loginPlayer,
};
