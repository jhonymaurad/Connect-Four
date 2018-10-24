/*
Board div will hold 42 cells for game, to render use nested loop to create one div a time.
add class name to each dev = 'cell'
And set data attributes column, row and a default 0 value;
*/
const boardElement = document.querySelector('.board');
const renderBoard = () =>{
  let i = 0;
  for (let row= 0; row < 6; row++) {
	   for (let col=0; col < 7; col++) {
         i += 1;
	       const cellElement = document.createElement('div');
         cellElement.className = 'cell';
         cellElement.id = `cell${i}`;
         boardElement.appendChild(cellElement);
         cellElement.setAttribute('data-column', col);
         cellElement.setAttribute('data-row', row);
         cellElement.setAttribute('data-value', 0);
	    }
  }
}
renderBoard();

const buttonsElements = document.querySelector('.buttons')
buttonsElements.addEventListener('click', changeColor);
function changeColor(e) {

  e.target.style.background = 'red';
}
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
//check if cell value is empty and decide where to drop disk
function drop(col) {//takes the column
  for (let row = board.length-1; row >= 0; row--) {//6,5,4,3,2,1 total 6 rows
    if(board[row][col] === 0){
      board[row][col] = currentPlayer;

      horizontalWin();
      //checkWin();
      console.log(board);
      // console.log(horizontalWin());
      console.log(horizontalWin());
      break;
    }
    else {
      //do nothing and move up in the column
    }
  }
  updatePlayer();
}

function horizontalWin() {
  for(let row = 0; row <= 5; row++){
    for(let col = 0; col <= 3; col++){
      if(board[row][col] != 0 &&
         board[row][col] == board[row][col+1] &&
         board[row][col] == board[row][col+2] &&
         board[row][col] == board[row][col+3]){
           return true;
      }
    }
  }
  return false;
}
function verticalWin() {
  for(let row = 0; row <= 2; row++){
    for(let col = 0; col <= 6; col++){
      if(board[row][col] != 0 &&
         board[row][col] === board[row+1][col] &&
         board[row][col] === board[row+2][col] &&
         board[row][col] === board[row+3][col]){
            return true;
      }
    }
  }
  return false;
}
function topRightToBottomLeft(){
  for (let row = 0; row <= 2; row++) {
    for(let col = 0; col <= 3; col++){
      if(board[row][col] != 0 &&
         board[row][col] == board[row+1][col+1] &&
         board[row][col] == board[row+2][col+2] &&
         board[row][col] == board[row+3][col+3]){
           return true;
      }
    }
  }
  return false;
}
function bottomRigthToUpperLeft(){
  for(let row = 3; row <= 5; row++){
    for(col = 0; col <= 3; col++){
      if(board[row][col] != 0 &&
         board[row][col] == board[row-1][col+1] &&
         board[row][col] == board[row-2][col+2] &&
         board[row][col] == board[row-3][col+3]){
           return true;
      }
    }
  }
  return false;
}
