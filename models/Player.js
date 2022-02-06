const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

// create our User model
const Players = sequelize.define('Players', {  
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
    }, 
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  // Other model options go here
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4]
    }
  }
},
  { 
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newPlayersData) {
        newUserData.password = await bcrypt.hash(newPlayersData.password, 10);
        return newPlayersData;
      },

      async beforeUpdate(updatedPlayersData) {
        updatedPlayersData.password = await bcrypt.hash(updatedPlayersData.password, 10);
        return updatedPlayersData;
      }
    },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
  }
);


// `sequelize.define` also returns the model
console.log(Players === sequelize.models.Players); // true


module.exports = Players;
