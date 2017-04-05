'use strict';
const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');
//const sequenlize = require('sequelize');
//const models = require('../../models/index');

router.post('/hotel', hotelController.insert);
//router.get('/', hotelController.get);
//router.get('/hotels/:hotelId', hotelController.getAll);

module.exports = router;





