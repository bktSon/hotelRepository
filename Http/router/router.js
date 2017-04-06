'use strict'
const express = require('express')
const router = express.Router()
const hotelController = require('../controller/hotelController')
const hotelRequireMiddleWare = require('../MiddleWare/hotelRequire.MiddleWare.js')
const roomRequireMiddleWare = require('../MiddleWare/roomRequireMiddleWare')
const hotelNotExistedMiddleWare = require('../MiddleWare/hotelNotExistedMIddleWare')

router.post('/hotel', hotelRequireMiddleWare, hotelController.insert)
router.post('/room/:hotelId', hotelNotExistedMiddleWare, roomRequireMiddleWare, hotelController.insertRoom)
router.get('/hotels/:hotelId', hotelNotExistedMiddleWare, hotelController.getAllRoom)
router.get('/lowestPrice/:hotelId', hotelController.getLowestPrice)

module.exports = router





