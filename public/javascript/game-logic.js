console.log("test to confirm js is connected. Change to process.argv to show file name?");

// initialize the original board. Will become an array containing what's in each square on the tic-tac-toe board
var origBoard;
const playerX = "X";
const playerO = "O";
// list of possible winning combinations
const winCombos = [
	[0, 1, 2], //
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2],
];

// Selector for table cells. Calling const tableCells instead of Cells for now
// PROBLEM: the tableCells querySelectorAll makes the images disappear. If you comment it out, the pictures come back. Why?
const tableCells = document.querySelectorAll(".table-cell");
startGame();

// with a for loop
function startGame() {
	// document.querySelector(".endgame").style.display = "none";
	// create an array of 9 elements, get the keys from the element, create an array from those elements
	origBoard = Array.from(Array(9).keys());
	console.log(`test for keys of array: ${origBoard}`);
	for (var i = 0; i < tableCells.length; i++) {
		tableCells[i].innerText = "";
		tableCells[i].style.removeProperty("background-color");
		tableCells[i].addEventListener("click", turnClick, false);
	}
}

// Andy wants to later replace for loop with with forEach for more modern js
// function startGame() {
// 	origBoard = Array.from(Array(9).keys());
// 	tableCells.forEach((cell) => {
// 		// we're not using letter X's or O's, but in case we do, leaving it in
// 		// cell[i].innerText = '';

// 		// when player wins, hope to add background color to the winning row. This removes it at start of game
// 		cell[i].style.removeProperty("background-color");
// 		cell[i].addEventListener("click", turnClick, false);
// 	});
// }

function turnClick(square) {
	// not working: At 17:23 in freeCodeCamp.org video, clicking on squares should console.log the id of the square.
	console.log(square.target.id);
}
//      if one of these is met, game over

//      else game keeps going

// pictures and words match/don't match function

// win conditions function

// create gameover function

// reset board at end of game function
