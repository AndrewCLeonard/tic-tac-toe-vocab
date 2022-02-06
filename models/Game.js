const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");

const Game = sequelize.define("Game", {
	gameid: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	playeraid: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	playerbid: {
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
	pictureid: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	wordid: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	subjectid: {
		type: DataTypes.INTEGER,
		unique: true,
		allowNull: false,
	},
	winningplayerid: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	losingplayerid: {
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
