/*console.log("JS file is connected to HTML! Woo!") */
//Variables for cards. Tested for memory. 
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

	if (cardTwo === cardFour) {
	window.alert("You got a match!");
}	else {
	window.alert("no match, try again.");
};

function createBoard() {
  for (x = 0; x < 4; x++) {
      var board = document.createElement("div");
      board.className = "card";
      document.getElementById("game-board").appendChild(board);
    }
};
creatBoard();