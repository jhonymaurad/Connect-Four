//get the board
const boardElement = document.querySelector('.board');
const cells = [
  [0,0],
  [1,0],
  [2,0],
  [3,0],
  [4,0],
  [5,0],
  [6,0],

  [0,1],
  [1,1],
  [2,1],
  [3,1],
  [4,1],
  [5,1],
  [6,1],

  [0,2],
  [1,2],
  [2,2],
  [3,2],
  [4,2],
  [5,2],
  [6,2],

  [0,3],
  [1,3],
  [2,3],
  [3,3],
  [4,3],
  [5,3],
  [6,3],

  [0,4],
  [1,4],
  [2,4],
  [3,4],
  [4,4],
  [5,4],
  [6,4],

  [0,5],
  [1,5],
  [2,5],
  [3,5],
  [4,5],
  [5,5],
  [6,5],
];
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

//render board with 42 cells
const  renderBoard = () =>{
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const cellElement = document.createElement('div');
    cellElement.style.left = (cell[0] * 100).toString()+'px';
    cellElement.style.top = (cell[1] * 100).toString()+'px';
    cellElement.className = 'cell';
    //set a new attribute to each div
    cellElement.setAttribute('data-location', i);
    boardElement.appendChild(cellElement);
    let x = cellElement.getAttribute('data-location', i);
    cellElement.innerHTML = 'col: '+cell[0] +', row: '+ cell[1] + ' '+ x;

  }
}
renderBoard();// create board 7 colums by 6 rows
