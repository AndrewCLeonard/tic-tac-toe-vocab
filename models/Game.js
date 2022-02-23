const { DataTypes } = require("sequelize"); // Do we need to inclued Model here?
const sequelize = require("../config/connection.js");

const Game = sequelize.define("Game", {
	gameId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	playerAId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	playerBId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [4],
		},
	},
	pictureId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	wordId: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
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
