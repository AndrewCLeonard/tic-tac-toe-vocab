const Game = require('./Game');
const GameBoard = require('./Game_board');
const Players = require('./Player');
const Words = require('./Word');
const Pictures = require('./Pictures');

//create associations
Players.

Players.belongsToMany(Game, {
  foreignKey: 'Game'
});



module.exports = { Game, GameBoard, Players, Words, Pictures };