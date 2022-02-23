import Game from "./Game-logic2.js";

let game = new Game();

console.log(game.turn);
game.makeMove(0);
console.log(game.board);
game.makeMove(6);
console.log(game.board);