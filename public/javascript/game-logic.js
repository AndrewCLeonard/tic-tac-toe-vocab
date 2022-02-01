// win conditions function

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
// naming the const tableCells instead of Cells for now
const tableCells = document.querySelectorAll(".table-cells");
startGame();

function startGame() {
	origBoard = Array.from(Array(9).keys());
	tableCells.forEach((cell) => {
		// we're not using letter X's or O's, but in case we do, leaving it in
		cell[i].innerText = '';

		// when player wins, hope to add background color to the winning row. This removes it at start of game
		cell[i].style.removeProperty("background-color");
		cell[i].addEventListener("click", turnClick, false);
	});
}
//      if one of these is met, game over

//      else game keeps going

// pictures and words match/don't match function

// reset board at end of game function
