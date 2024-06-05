const express = require("express");
const router = express.Router();
const controller = require('./../controllers/MainController');


router.get('/', controller.homePage);


module.exports = router;