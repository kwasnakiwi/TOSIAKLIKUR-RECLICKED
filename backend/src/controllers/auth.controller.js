const pool = require("../db/pool");
const jwt = require("jsonwebtoken");

const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({
        error: "Nie zalogowano",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const result = await pool.query(
      `SELECT id, username, clicks, coins, created_at
       FROM players
       WHERE id = $1`,
      [decoded.userId]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        error: "Użytkownik nieznaleziony",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return res.status(401).json({
      error: "Sesja wygasła",
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token");

  res.json({
    message: "Wylogowano",
  });
};

module.exports = {
  getCurrentUser,
  logout,
};