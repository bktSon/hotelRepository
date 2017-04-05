'use strict';

const HotelRepository = require('../../App/hotel/hotelRepository');

module.exports.insert = function(req, res) {
  HotelRepository.prototype.insert(req.body).then((result) => {
    res.json(result);
  });
};


module.exports.insertRoom = function(req, res) {

}