const express = require("express");

const {
  getPlayer,
  createPlayer,
  clickPlayer,
  getRanking,
} = require("../controllers/player.controller");

const router = express.Router();

router.get("/ranking", getRanking);
router.get("/:id", getPlayer);

router.post("/", createPlayer);
router.post("/:id/click", clickPlayer);

module.exports = router;