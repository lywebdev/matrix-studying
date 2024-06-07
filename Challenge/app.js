const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const postRoutes = require('./config/postRoutes');
const bodyParser = require('body-parser');
require('./config/db');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', postRoutes);


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});
