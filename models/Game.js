const { DataTypes } = require("sequelize"); // Do we need to inclued Model here?
const sequelize = require("../config/connection.js");

class Game extends Game {}

Game.init(
	{
	  gameid: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	  },
	  playerAId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'player',
			key: 'id'
		}
	  },
	  playerBId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'player',
			key: 'id'
		}
	},
	  password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		len: [4],
	}
},
	pictureId: {
		references: {
			model: 'picture',
			key: 'id'
	}
},
	wordId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'word',
			key: 'id'
		}
	},
	subjectId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	winningPlayerId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	losingPlayerId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	sequelize,
	timestamps: false,
	freezeTableName: true,
	underscored: true,
	modelName: "Game",
});

console.log(Game === sequelize.models.Game);

module.exports = Game;
