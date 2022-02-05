const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class players extends Model {}

module.exports = { players };
