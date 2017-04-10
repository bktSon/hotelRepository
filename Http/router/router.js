'use strict'
const express = require('express')
const router = express.Router()
const hotelController = require('../controller/hotelController')
const hotelRequireMiddleWare = require('../middleWare/hotelRequire.MiddleWare.js')
const roomRequireMiddleWare = require('../middleWare/roomRequireMiddleWare')
const hotelNotExistedMiddleWare = require('../middleWare/hotelNotExistedMIddleWare')

router.post('/hotel', hotelRequireMiddleWare, hotelController.insert)
router.post('/room/:hotelId', hotelNotExistedMiddleWare, roomRequireMiddleWare, hotelController.insertRoom)
router.get('/rooms/:hotelId', hotelNotExistedMiddleWare, hotelController.getAllRoom)
router.get('/lowestPrice/:hotelId', hotelNotExistedMiddleWare, hotelController.getLowestPrice)

module.exports = router





