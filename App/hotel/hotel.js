'use strict'

const Hotel = function() {

}
Hotel.prototype.getId = function() {
  return this.hotel_id;
}

Hotel.prototype.getAdress = function() {
  return this.address;
}

Hotel.prototype.getName = function() {
  return this.name;
}

module.exports = Hotel;

