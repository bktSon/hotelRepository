'use strict'


const models = require('../../models/index');

let HotelRepository = function () {

}

HotelRepository.prototype.insert = function (hotel) {
  return models.Hotels.findOrCreate({where: {name: hotel.name, address: hotel.address}});

}

HotelRepository.prototype.insertRoom = function (req, res) {
  return models.Hotels.findOne({where: {id: 1}}).then((hotel) => {
    req.hotel = hotel;
    console.log(models.Rooms)
    models.Rooms
      .create({name: req.body.name, price: req.body.price, hotel_id : req.hotel.id})
  })
}

HotelRepository.prototype.getAll = function (hotel) {

}
module.exports = HotelRepository;