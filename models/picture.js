const { sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Picture = sequelize.define('picture', {
    wordId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wordDescription: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    pictureId: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

//`sequelize.define` also returns the model
console.log(Picture === sequelize.models.Picture); //true

module.exports = Picture;