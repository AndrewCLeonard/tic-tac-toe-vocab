const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// bcrypt for hashing passwords
const bcrypt = require("bcrypt");

// create our players model
class Player extends Model {
        
}

module.exports = Player;
