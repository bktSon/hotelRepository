'use strict';
const express = require('express');
const router = express.Router();
const sequenlize = require('sequelize');
const models = require('../../models/index');
const hotelController = require('../controller/hotelController');
//router.get('/', hotelController.get);
router.post('/hotel', hotelController.insert);
//router.get('/hotels/:hotelId', hotelController.getAll);

module.exports = router;





