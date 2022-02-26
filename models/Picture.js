const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Picture extends Picture {}

Picture.init(
	{
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	wordId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		foreignKey: true,
		autoIncrement: true
	},
	word: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	wordDescription: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	wordId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'word',
			key: 'id'
		}
	}
},
	{
		sequelize, 
		freezeTableName: true,
		modelName: 'picture'
	}
);
//`sequelize.define` also returns the model
console.log(Picture === sequelize.models.Picture); //true

module.exports = Picture;
