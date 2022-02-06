const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our Game Board
const Game_Board = sequelize.define('Game_Board',  {
    gameboardid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    pictureid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    engdesc:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    wordid: { 
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Game_Board'
    }
);

console.log(Game_Board === sequelize.models.Game_Board);

module.exports = Game_Board;