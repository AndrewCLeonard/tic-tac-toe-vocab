const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Word extends Model {}
	Word.init(
	{
		id: {
			type: DataTypes.INTEGER,
			AllowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		engdesc: {
			type: DataTypes.STRING,
			AllowNull: false,
		},
		subject: {
			type: DataTypes.STRING,
			AllowNull: false,
		},
		wordId: {
			type: DataTypes.INTEGER,
			AllowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "Word",
	}
);

// `sequelize.define` also returns the model
console.log(Word === sequelize.models.Word); // true

module.exports = Word;
