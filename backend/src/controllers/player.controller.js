const pool = require("../db/pool");

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
  const { username } = req.body || {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({
      error: "Username is required",
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

  try {
    const result = await pool.query(
      `INSERT INTO players (username)
             VALUES ($1)
             RETURNING *`,
      [cleanUsername],
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
