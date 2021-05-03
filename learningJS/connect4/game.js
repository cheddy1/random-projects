// Define some variables
let canvas;
let context;
var bw = 728;
var bh = 624;
let model = {
  board: [[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."],[".",".",".",".",".",".","."]],
  next: "X",
}

function tick() {
  window.requestAnimationFrame(splat);
}

// The following two functions are adapted from this answer: https://stackoverflow.com/questions/33181356/connect-four-game-checking-for-wins-js
// Checks that the first cell is not 0, and that the rest of the cells are the same color
function checkLine(a,b,c,d, i, j, x, y) {
    if((a != 0) && (a == b) && (a == c) && (a == d)) {
      if(model.board[i][j] != '.') {
        // If theres a winner, draw a line thru the winning 4 
        context.beginPath();
        context.moveTo((j*104)+52, (i*104)+52);
        context.lineTo((y*104)+52, (x*104)+52);
        context.strokeStyle = "Black";
        context.stroke();
      }
    }
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}

// Run through each possible combination of winning formations
function checkWinner(bd) {
  // Check down
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 7; j++) {
      if (checkLine(bd[i][j], bd[i+1][j], bd[i+2][j], bd[i+3][j], i, j, i+3,j)) {
        if(bd[i][j]!= '.') {
          return bd[i][j];
        }      
      }        
    }
  }

  //Check right
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 4; j++) {
      if (checkLine(bd[i][j], bd[i][j+1], bd[i][j+2], bd[i][j+3], i, j, i, j+3)) {
        if(bd[i][j]!= '.') {
          return bd[i][j];
        }      
      }        
    }
  }

  // Check down right
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
      if (checkLine(bd[i][j], bd[i+1][j+1], bd[i+2][j+2], bd[i+3][j+3], i, j, i+3, j+3)) {
        if(bd[i][j]!= '.') {
          return bd[i][j];
        }      
      }        
    }
  }

  // Check down left
  for (i = 3; i < 6; i++) {
    for (j = 0; j < 4; j++) {
      if (checkLine(bd[i][j], bd[i-1][j+1], bd[i-2][j+2], bd[i-3][j+3], i, j, i-3, j-3)) {
        if(bd[i][j]!= '.') {
          return bd[i][j];
        }      
      }        
    }
  }
  return(0);
}

// Splatting the canvas onto the screen
function splat() {
  context.clearRect(0,0,canvas.width,canvas.height);
  // Taken from https://www.html5canvastutorials.com/tutorials/html5-canvas-lines/
  // Draw the grid
  for (var x = 1; x < 7; x++) {
      context.moveTo(0.5 + (x*104), 1);
      context.lineTo(0.5 + (x*104), bh );
  }
  for (var x = 1; x <= 5; x++) {
      context.moveTo(1, 0.5 + (x*104));
      context.lineTo(bw, 0.5 + (x*104));
  }
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.stroke();

  // Draw the players chips on the board
  for(let i = 0; i <= 5; i++) {
    for(let j = 0; j <= 6; j++) {
      let me = model.board[i][j];
      if (me != '.') {
        context.beginPath();
        if (me == 'X') {
          context.fillStyle = "#c82124";
        }
        else {
          context.fillStyle = "#0000FF";
        }
        context.arc((j * 104)+53, (i * 104)+53,40,0, 2 * Math.PI);
        context.closePath();
        context.fill();
      }
    }
  }

  tick();
}

// Once the DOM is loaded, define canvas and context
document.addEventListener("DOMContentLoaded", () => { 
  canvas = document.querySelector("#gameBoard");
  context = canvas.getContext("2d");
  splat();
})

// Turn x and y coords into positions on the grid
function roundMe(x){ return Math.ceil((x-10)/104)-1 }

// On click
document.addEventListener("click", e => {
  
  // Get the x and y grid location, but don't allow anything outside the grid
  const [i,j] = [e.x,e.y].map(roundMe);
  if (i < 0 || i > 6) return;
  if (j < 0 || j > 5) return;
  if (model.board[j][i] != '.') {
    return;
  }

  // Place a chip in the lowest possible slot
  for (var x = 5; x >=0 ; x--) {
    if (model.board[x][i] == '.'){
      model.board[x][i] = model.next;
      break
    }
  }

  // Set the next player, change the text on the page
  if (model.next == 'X') {
    model.next = 'O'
    document.getElementsByClassName('redPlayer')[0].style.display = "none"
    document.getElementsByClassName('bluePlayer')[0].style.display = "block"
  } else if (model.next == 'O') {
    model.next = 'X'
    document.getElementsByClassName('redPlayer')[0].style.display = "block"
    document.getElementsByClassName('bluePlayer')[0].style.display = "none"
  }

  // Check if there's been a winner after every click
  if (checkWinner(model.board) == "X")
  {
    setTimeout(function(){
      alert('Red is the winner!');
      for(let i = 0; i <= 5; i++) {
        for(let j = 0; j <= 6; j++) {
          model.board[i][j] = ".";
        }
      }
      window.location.reload(false); 
  }, 10);
  }
  else if (checkWinner(model.board) == "O")
  {
    setTimeout(function(){
      alert('Blue is the winner!');
      for(let i = 0; i <= 5; i++) {
        for(let j = 0; j <= 6; j++) {
          model.board[i][j] = ".";
        }
      }
      window.location.reload(false); 
  }, 10);
  }

  // Check if the board is full
  var counter = 0;
  for(let i = 0; i <= 5; i++) {
    for(let j = 0; j <= 6; j++) {
      if (model.board[i][j] == "."){
        counter++
      }
    }
  }
  // If the board is full, reset the game
  if (counter == 0) {
    setTimeout(function(){
      alert('Tie Game!');
      for(let i = 0; i <= 5; i++) {
        for(let j = 0; j <= 6; j++) {
          model.board[i][j] = ".";
        }
      }
      window.location.reload(false); 
  }, 10);
  }
})
