const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

const Word = sequelize.define(
	"Word",
	{
		id: {
			type: DataTypes.INTEGER,
			AllowNull: false,
			primaryKey: true,
		},
		engdesc: {
			type: DataTypes.STRING,
			AllowNull: false,
		},
		subject: {
			type: DataTypes.STRING,
			AllowNull: false,
		},
		wordid: {
			type: DataTypes.INTEGER,
			AllowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "Word",
	}
);

// `sequelize.define` also returns the model
console.log(Word === sequelize.models.Word); // true

module.exports = Word;
