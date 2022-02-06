const Game = require('./Game');
const Game_Board = require('./Game_board');
const Player = require('./Player');
const Words = require('./Words');
const Picture = require('./Picture');

//create associations
Player.belongsToMany(Game, {
  primaryKey: 'true'
});

Game.belongsTo(Player, {
  foreignKey: 'player_a_id',
  foreignKey: 'player_b_id',
  onDelete: 'SET NULL'
});

Player_a_id.belongsTo(Player, {
  primaryKey: 'player_id',
  onDelete: 'SET NULL'
});

Player_b_id.belongsTo(Player, {
  primaryKey: 'player_id',
  onDelete: 'SET NULL'
});

Game.hasMany(Picture, {
  foreignKey: 'Picture_id',
  onDelete: 'SET NULL'
});

Picture.belongsTo(Picture, {
  foreignKey: 'Picture_id',
  onDelete: 'SET NULL'
});

Game.hasMany(Words, {
  foreignKey: 'Word_id',
  onDelete: 'SET NULL'
});

Words.belongsTo(Words, {
  foreignKey: 'Word_id',
  onDelete: 'SET NULL'
});

Game.hasMany(Winningplayerid, {
  foreignKey: 'Winningplayerid',
  onDelete: 'SET NULL'
});

Winningplayerid.belongsTo(Player, {
  foreignKey: 'Player',
  onDelete: 'SET NULL'
});

Game.hasMany(Losingplayerid, {
  foreignKey: 'Losingplayerid',
  onDelete: 'SET NULL'
});

Losingplayerid.belongsTo(Player, {
  foreignKey: 'Player',
  onDelete: 'SET NULL'
});

Game.hasOne(Gameid, {
  primaryKey: 'true',
  onDelete: 'SET NULL'
});

Gameid.belongsTo( Game_Board_Id, {
  primaryKey: 'Game_Board_ID',
  onDelete: 'SET NULL'
});

Gameid.hasMany(Picture, {
  foreignKey: 'Picture_id',
  onDelete: 'SET NULL'
});

Pictureid.belongsTo( Game_Board_Id, {
  foreignKey: 'true',
  onDelete: 'SET NULL'
});

Gameid.hasMany(Word, {
  foreignKey: 'Word_id',
  onDelete: 'SET NULL'
});

Words.belongsTo(Game_Board_Id, {
  foreignKey: 'Word_id',
  onDelete: 'SET NULL'
});

Words.belongsTo(Pictureid, {
  foreignKey: 'Picture_id',
  onDelete: 'SET NULL'
});

Picture.belongsTo(Words, {
  foreignKey: 'Word_id',
  onDelete: 'SET NULL'
});

module.exports = { Game, Game_Board, Player, Words, Picture };