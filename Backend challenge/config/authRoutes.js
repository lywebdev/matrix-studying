const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const ensureGuest = (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            res.redirect('/'); // if user is authenticated -> redirect to tweeter page
        } catch (error) {
            next(); // if token invalid -> access exists to auth
        }
    } else {
        next(); // if token not exists -> access exists to auth
    }
};

router.get('/auth/login', ensureGuest, authController.loginForm);
router.post('/auth/login', ensureGuest, authController.login);
router.get('/auth/register', ensureGuest, authController.registerForm);
router.post('/auth/register', ensureGuest, authController.register);


module.exports = router;