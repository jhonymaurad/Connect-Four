const boardElement = document.querySelector('.board');
const renderBoard = () =>{
  for (let row= 0; row < 6; row++) {
	   for (let col=0; col < 7; col++) {
	       const cellElement = document.createElement('div');
         cellElement.className = 'cell';
         boardElement.appendChild(cellElement);
         cellElement.setAttribute('data-column', col);
         cellElement.setAttribute('data-row', row);
         cellElement.setAttribute('data-value', 0);
	    }
  }
}
renderBoard();
//=============================================================
let board = [];//star the board as an array.

//Set it up as a multi-dimensional array, to represent the col/row value for the board
//every section of the board will be represented by a point on the grid X and Y (col and row).
//Top left will be 0,0 and as it moves to the right, that will be +x and down will be +y.
for (row = 0; row < 6; row++) {
		board[row] = [];
		for (col = 0; col < 7; col++) {
				board[row][col] = 0;
		}
}
console.log(board);
console.log(board.length);

//set current player to 1 at the star of game
let currentPlayer = 1;
//update players turn
function updatePlayer (){
  if (currentPlayer === 1) {
    currentPlayer = 2;
  }
  else{
    currentPlayer = 1;
  }
}

//check if cell value is empty and decide to where to drop disk
function drop(col) {//takes the column
  for (let row = board.length; row > 0; row--) {//6,5,4,3,2,1 total 6 rows
    if (board[row][col] === 0){
      board[row][col] = currentPlayer;
      //checkWin();
    }
    else {
      //go up in the column
    }
  }
  updatePlayer();
}
