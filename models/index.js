const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}

module.exports = { Player };
