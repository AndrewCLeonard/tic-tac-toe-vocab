export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(i) {
        if (this.bo)
            this.board[i] = this.turn;
        this.nextTurn()
    }
}