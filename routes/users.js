const express = require('express');
const router = express.Router();

// route for the (user_controller.js)
const userController = require('../controllers/user_controller')
router.get('/profile', userController.profile)


module.exports = router;