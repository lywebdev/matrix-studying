const express = require('express');

const app = express();
const PORT = 3000;
const routes = require('./config/routes');

app.set('view engine', 'ejs');


app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});
