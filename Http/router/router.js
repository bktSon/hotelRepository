'use strict';
const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');
//const sequenlize = require('sequelize');
//const models = require('../../models/index');

router.post('/hotel', hotelController.insert);
router.post('/room/:hotelId', hotelController.insertRoom);
router.get('/hotels/:hotelId', hotelController.getAllRoom);
router.get('/lowestPrice/:hotelId', hotelController.getLowestPrice);

module.exports = router;





