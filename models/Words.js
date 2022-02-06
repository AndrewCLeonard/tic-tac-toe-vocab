const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our Pictures model
const Pictures = sequelize.define('Pictures',  {
    pictureID: {
        type: DataTypes.INTEGER,
        AllowNull: false
    },
    engdesc: {
        type: DataTypes.STRING,
        AllowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        AllowNull: false
    },
    wordid: {
        type: DataTypes.INTEGER,
        AllowNull: false,
        unique: true
    },
    sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Words'
  }
);

// `sequelize.define` also returns the model
console.log(Words === sequelize.models.Words); // true

module.exports = Words;