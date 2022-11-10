const express = require('express');

const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/games', gameController.getGames);
router.get('/game/:id', gameController.gameDetail);

module.exports = router;
