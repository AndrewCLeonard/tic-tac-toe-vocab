const Game = require('./Game');
const GameBoard = require('./Game_board');
const Players = require('./Players');
const Words = require('./Words');
const Pictures = require('./Pictures');

//create associations
Players.

Players.belongsToMany(Game, {
  foreignKey: 'Game'
});



module.exports = { Game, GameBoard, Players, Words, Pictures };