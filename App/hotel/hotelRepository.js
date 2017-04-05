'use strict'

const Hotel  = require('./hotel');
const models = require('../../models/index');
let promise  = require('bluebird');

let HotelRepository = function () {

}

HotelRepository.prototype.insert = function (hotel) {
  return models.Hotels.findOrCreate({where: {name: hotel.name, address: hotel.address}});

}

HotelRepository.prototype.getAll = function (hotel) {

}
module.exports = HotelRepository;