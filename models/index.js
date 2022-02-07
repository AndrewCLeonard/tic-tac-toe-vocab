// import all models
const Game = require("./Game");
const Game_Board = require("./Game_Board");
const Player = require("./Player");
const Words = require("./Word");
const Picture = require("./Picture");

//create associations
Player.belongsToMany(Game, {
	through: "PlayerGames",
	// primaryKey: 'true' // Not sure why this is here. Unnecessary?
});

Game.belongsToMany(Player, {
	through: "PlayerGames",
	foreignKey: "playerAId",
	foreignKey: "playerBId",
	onDelete: "SET NULL",
});

// Right now, Sequelize is creating the through table. I'm not directly declaring i
/*
playerAId.belongsToMany(Player, {
	primaryKey: "playerId",
	onDelete: "SET NULL",
});

playerBId.belongsTo(Player, {
	primaryKey: "playerId",
	onDelete: "SET NULL",
});
*/
Game.hasMany(Picture, {
	foreignKey: "Picture_id",
	onDelete: "SET NULL",
});

// I don't see this being necessary
// Picture.belongsTo(Picture, {
// 	foreignKey: "Picture_id",
// 	onDelete: "SET NULL",
// });

Game.hasMany(Words, {
	foreignKey: "wordId",
	onDelete: "SET NULL",
});

Words.belongsTo(Words, {
	foreignKey: "wordId",
	onDelete: "SET NULL",
});

// game can have one and only one winningPlayerId
Game.hasMany(winningPlayerId, {
	// foreignKey: "winningPlayerId",
	onDelete: "SET NULL",
});

winningPlayerId.belongsTo(Player, {
	// foreignKey: "Player",
	onDelete: "SET NULL",
});

Game.hasMany(losingPlayerId, {
	// foreignKey: "losingPlayerId",
	onDelete: "SET NULL",
});

losingPlayerId.belongsTo(Player, {
	// foreignKey: "Player",
	onDelete: "SET NULL",
});

Game.hasOne(Gameid, {
	primaryKey: "true",
	onDelete: "SET NULL",
});

Gameid.belongsTo(Game_Board_Id, {
	primaryKey: "Game_Board_ID",
	onDelete: "SET NULL",
});

Gameid.hasMany(Picture, {
	foreignKey: "Picture_id",
	onDelete: "SET NULL",
});

pictureId.belongsTo(Game_Board_Id, {
	foreignKey: "true",
	onDelete: "SET NULL",
});

Gameid.hasMany(Word, {
	foreignKey: "wordId",
	onDelete: "SET NULL",
});

Words.belongsTo(Game_Board_Id, {
	foreignKey: "wordId",
	onDelete: "SET NULL",
});

Words.belongsTo(pictureId, {
	foreignKey: "Picture_id",
	onDelete: "SET NULL",
});

Picture.belongsTo(Words, {
	foreignKey: "wordId",
	onDelete: "SET NULL",
});

module.exports = { Game, Game_Board, Player, Words, Picture };
