const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");

// create Player model
const Player = sequelize.define(
	"Player",
	{
		playerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			// Other model options go here
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4],
			},
		},
	},
	{
		hooks: {
			// set up beforeCreate lifecycle "hook" functionality
			async beforeCreate(newPlayerData) {
				newUserData.password = await bcrypt.hash(newPlayerData.password, 10);
				return newPlayerData;
			},

			async beforeUpdate(updatedPlayerData) {
				updatedPlayersData.password = await bcrypt.hash(updatedPlayerData.password, 10);
				return updatedPlayerData;
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);

// `sequelize.define` also returns the model
console.log(Player === sequelize.models.Player); // true

module.exports = Player;
