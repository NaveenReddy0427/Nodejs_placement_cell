const express = require('express');
const router = express.Router();

// router for (home_controller.js)
const homeController = require('../controllers/home_controller')
router.get('/', homeController.home);

// to use the (user.js) route
router.use('/users', require('./users'))



module.exports = router;