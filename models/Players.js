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