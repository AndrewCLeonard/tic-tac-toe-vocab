const { sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our User model
const User = sequelize.define('User', {  
    firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
    }, 
    userName: {
        type: DataTypes.STRING
  // Other model options go here
    },
    passWord: {
        type: DataTypes.STRING
    },
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


module.exports = User;