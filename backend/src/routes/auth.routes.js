const express = require("express");

const { getCurrentUser, logout } = require("../controllers/auth.controller");

const router = express.Router();

router.get("/me", getCurrentUser);
router.post("/logout", logout);

module.exports = router;
