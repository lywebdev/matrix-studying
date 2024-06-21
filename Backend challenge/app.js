require('dotenv').config();
require('./config/db');

const express = require('express');
const app = express();
const authRotes = require('./config/authRoutes');
const tweetRoutes = require('./config/tweetRoutes');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;


app.use(sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
}));


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Instructing express to use static files from the public folder
app.use(cookieParser());

// this is to make it impossible to access the authorization page if the user is logged in
// const ensureGuest = (req, res, next) => {
//     const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
//
//     if (token) {
//         try {
//             const decoded = jwt.verify(token, 'secret_key');
//             res.redirect('/'); // if user is authenticated -> redirect to tweeter page
//         } catch (error) {
//             next(); // if token invalid -> access exists to auth
//         }
//     } else {
//         next(); // if token not exists -> access exists to auth
//     }
// };

const jwtAuth = (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.redirect('auth/login');
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).send('No access');
    }
};


app.use('/', authRotes);
app.use('/', tweetRoutes);

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});
