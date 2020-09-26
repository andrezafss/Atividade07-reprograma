const express = require('express');
const router = express.Router();
const controller = require('../controller/restaurantesController')

router.get("/", controller.getAll);
router.get("/restaurantes", controller.getAll);

module.exports = router;