'use strict';
const models = require('../../models/index');
const HotelRepository = require('../../App/hotel/hotelRepository');
const promise = require('bluebird');
//module.exports.get = function(req, res) {
//  models.Hotels
//    .findOne({where: {id : 2}}).then((hotel) => {
//    res.json(hotel);
//  })
//}
//
//module.exports.insert = function(req, res) {
//  models.Hotels
//    .findOrCreate({where: {name:req.body.name, address: req.body.address}}).then((hotel) => {
//    res.json(hotel)
//  })
//}

module.exports.insert = function(req, res) {
  HotelRepository.prototype.insert(req.body);
};

module.exports.getAll = function(req, res) {
  /**
   * Doan nay e ko then dc
   */
  HotelRepository.prototype.getAll(req.params.hotelId).then((hotel) => {
    res.json(hotel);
  });
}

module.exports.insertRoom = function(req, res) {

}