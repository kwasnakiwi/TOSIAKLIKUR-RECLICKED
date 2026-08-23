const express = require("express");

const {
  getPlayer,
  createPlayer,
  clickPlayer,
  loginPlayer,
} = require("../controllers/player.controller");

const router = express.Router();

router.get("/:id", getPlayer);
router.post("/", createPlayer);
router.post("/login", loginPlayer);
router.post("/:id/click", clickPlayer);

module.exports = router;