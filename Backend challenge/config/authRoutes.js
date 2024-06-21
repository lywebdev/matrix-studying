const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/auth/login', authController.loginForm);
router.post('/auth/login', authController.login);
router.get('/auth/register', authController.registerForm);
router.post('/auth/register', authController.register);


module.exports = router;