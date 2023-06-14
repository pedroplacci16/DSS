const PlayerController = require('../controllers/player.controller.js');
const express = require('express')

const router = express.Router()
router.get('/', PlayerController.get)
router.get('/filtros', PlayerController.getByFiltro)

module.exports = router;
