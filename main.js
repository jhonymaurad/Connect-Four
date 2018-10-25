/*
Board div will hold 42 cells for game, to render use nested loop to create one div a time.
add class name to each dev = 'cell'
And set data attributes column, row and a default 0 value;
*/
const boardElement = document.querySelector('.board');
const renderBoard = () =>{
  let i = 0;
  for (let row = 0; row < 6; row++) {
	   for (let col = 0; col < 7; col++) {

	       const cellElement = document.createElement('div');
         cellElement.className = 'cell';
         cellElement.id = `cell${i}`;
         boardElement.appendChild(cellElement);
         cellElement.setAttribute('data-location', i);
         cellElement.setAttribute('data-value', 0);
         i += 1;
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
const displayWinMessage = () => {
  if (document.querySelector('.win-message') !== null) {
    return;
  }
  //create div with innerHTML mesage and append to board
  const winMessageElement = document.createElement('div');
  winMessageElement.className = 'win-message';
  winMessageElement.innerHTML = `Player ${currentPlayer} is the winner`;
  document.querySelector('.board').appendChild(winMessageElement);
}
//check if cell value is empty and decide where to drop disk
function drop(col) {//takes the column
  for (let row = board.length-1; row >= 0; row--) {//6,5,4,3,2,1 total 6 rows
    if(board[row][col] === 0){
      board[row][col] = currentPlayer;
      checkWin();
      console.log(board);
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
function checkWin(){
  let isWinner = false;
  let hWin = horizontalWin();
  let vWin = verticalWin();
  let dWin = topRightToBottomLeft();
  let d2Win = bottomRigthToUpperLeft();
  if(hWin || vWin || dWin || d2Win === true){
    isWinner = true;
  }
  if(isWinner){
    displayWinMessage();
  }
}
const cellsElements = document.querySelectorAll('.cell');
console.log(cellsElements);
function changeColor(col) {//takes the column
  for (let row = board.length-1; row >= 0; row--) {//6,5,4,3,2,1 total 6 rows
    if(board[row][col] === 1){
      cellsElements[35].style.backgroundColor = "#4183f4";
    }
    else if(board[row][col] === 2){
      cellsElements[35].style.backgroundColor = "red";
    }
    else{
      cellsElements[35].style.backgroundColor = "yellow";
    }
  }
}
