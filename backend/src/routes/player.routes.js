const express = require("express");

const {
  getPlayer,
  createPlayer,
  clickPlayer,
} = require("../controllers/player.controller");

const router = express.Router();

router.get("/:id", getPlayer);
router.post("/", createPlayer);
router.post("/:id/click", clickPlayer);

module.exports = router;