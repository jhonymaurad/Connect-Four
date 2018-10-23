//get the board
const boardElement = document.querySelector('.board');
const cells = [
  {column: 0,row:0, value :0},
  {column: 1,row:0, value :0},
  {column: 2,row:0, value :0},
  {column: 3,row:0, value :0},
  {column: 4,row:0, value :0},
  {column: 5,row:0, value :0},
  {column: 6,row:0, value :0},

  {column: 0,row:1, value :0},
  {column: 1,row:1, value :0},
  {column: 2,row:1, value :0},
  {column: 3,row:1, value :0},
  {column: 4,row:1, value :0},
  {column: 5,row:1, value :0},
  {column: 6,row:1, value :0},

  {column: 0,row:2, value :0},
  {column: 1,row:2, value :0},
  {column: 2,row:2, value :0},
  {column: 3,row:2, value :0},
  {column: 4,row:2, value :0},
  {column: 5,row:2, value :0},
  {column: 6,row:2, value :0},

  {column: 0,row:3, value :0},
  {column: 1,row:3, value :0},
  {column: 2,row:3, value :0},
  {column: 3,row:3, value :0},
  {column: 4,row:3, value :0},
  {column: 5,row:3, value :0},
  {column: 6,row:3, value :0},

  {column: 0,row:4, value :0},
  {column: 1,row:4, value :0},
  {column: 2,row:4, value :0},
  {column: 3,row:4, value :0},
  {column: 4,row:4, value :0},
  {column: 5,row:4, value :0},
  {column: 6,row:4, value :0},

  {column: 0,row:5, value :0},
  {column: 1,row:5, value :0},
  {column: 2,row:5, value :0},
  {column: 3,row:5, value :0},
  {column: 4,row:5, value :0},
  {column: 5,row:5, value :0},
  {column: 6,row:5, value :0}
];

//render board with 42 cells
const  renderBoard = () =>{
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const cellElement = document.createElement('div');
    cellElement.style.left = (cell.column * 100).toString()+'px';
    cellElement.style.top = (cell.row * 100).toString()+'px';
    cellElement.className = 'cell';
    //set a new attribute to each div
    cellElement.setAttribute('data-location', i);
    boardElement.appendChild(cellElement);
  }
}
renderBoard();// create board 7 colums by 6 rows
