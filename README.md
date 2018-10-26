# Project-1
# WIREFRAME:

![alt text](https://git.generalassemb.ly/jhonymaurad/Project-1/blob/master/images/Connect_Four.gif "Connect Four")

## SPECS:
Connect Four board size is 7 columns × 6 rows.
2 player represented by either red or yellow discs.
players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column.  

## WIN CONDITION:
The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

## LOSE CONDITION:
When other player gets win condition first or
After there is no more empty cells game ends

## MVP:
working game: all possible winning conditions can be accomplish by the players and a message is display when a player wins.

![alt text](https://git.generalassemb.ly/jhonymaurad/Project-1/blob/master/images/wireframe.jpg "Connect Four")

## LOG:
Thursday October 25: Finish all game logic for win conditions. Link javascript with user interface. Changed game theme from Connect Four to Link Four(The legend of Zelda).

Major struggles so far: Functions for win conditions, especially with the functions to check diagonally. Also linking user interface with javascript still not clear.

```
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
```
## LINK:

[Link to Connect Four Game](https://git.generalassemb.ly/jhonymaurad/Project-1/blob/master/index.html "Connect Four")
