<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      loggedOn: DataTypes.BOOLEAN,
      
      wins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      losses: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
    });
    return Players;
  };
  //this is the user's model!
=======
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
>>>>>>> a5f9095ca8ebb0c732240ed72a84085153269c6e
