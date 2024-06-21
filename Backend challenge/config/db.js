const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING).catch(err => {
    return 'Error db connection';
});
// const db = mongoose.connection;
