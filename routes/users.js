const express = require('express');
const router = express.Router();

// route for the (user_controller.js)
const userController = require('../controllers/user_controller')
router.get('/users', userController.profile)


module.exports = router;