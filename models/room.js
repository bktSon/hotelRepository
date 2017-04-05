'use strict';
module.exports = function(sequelize, DataTypes) {
  let Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    hotel_id: DataTypes.INTEGER
  });
  return Room;
};