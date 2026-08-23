const pool = require("../db/pool");
const bcrypt = require("bcrypt");

const getPlayer = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM players WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Player not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Database error",
    });
  }
};

const createPlayer = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      error: "Username is required",
    });
  }

  if (!password || typeof password !== "string") {
    return res.status(400).json({
      error: "Password is required",
    });
  }

  const cleanUsername = username.trim();

  if (cleanUsername.length < 3) {
    return res.status(400).json({
      error: "Username must be at least 3 characters long",
    });
  }

  if (cleanUsername.length > 20) {
    return res.status(400).json({
      error: "Username must be at most 20 characters long",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: "Password must be at least 6 characters long",
    });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO players (username, password_hash)
       VALUES ($1, $2)
       RETURNING id, username, clicks, coins, created_at`,
      [cleanUsername, passwordHash],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Database error",
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
        error: "Player not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Database error",
    });
  }
};

module.exports = {
  getPlayer,
  createPlayer,
  clickPlayer,
};
