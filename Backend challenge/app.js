require('dotenv').config();
require('./config/db');

const express = require('express');
const app = express();
const authRotes = require('./config/authRoutes');
const tweetRoutes = require('./config/tweetRoutes');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;


app.use(sassMiddleware({
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Instructing express to use static files from the public folder
app.use(cookieParser());



app.use('/', authRotes);
app.use('/', tweetRoutes);

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});
