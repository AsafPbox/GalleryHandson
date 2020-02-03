var gPacman; 
const PACMAN  = '&#9786;';

function createPacman(board) {
  var rand = emptyCellsArray[Math.floor(Math.random() * emptyCellsArray.length)];

  gPacman = {
    location: {
      i: rand.i,
      j: rand.j
    },
    isSuper: false
  }; 
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  // console.log(getCellCoord(getRandomEmptyCell()))
  if (!gGame.isOn) return;
  // console.log('eventKeyboard:', eventKeyboard);
  
  var nextLocation = getNextLocation(eventKeyboard);
  // User pressed none-relevant key in the keyboard
  if (!nextLocation) return;
  
  var nextCell = gBoard[nextLocation.i][nextLocation.j];
  
  // Hitting a WALL, not moving anywhere
  if (nextCell === WALL) return;
  
  // Hitting FOOD? update score
  if (nextCell === FOOD) updateScore(1);
  else if (nextCell === CHERRY) updateScore(10);
  else if (nextCell === SUPER_FOOD) {console.log(superFood())}
  else if (nextCell === GHOST) {
    gameOver()
    renderCell(gPacman.location, EMPTY);
    return;
  }
  
  // Update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // Update the DOM
  renderCell(gPacman.location, EMPTY);
  
  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;

  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
  // Render updated model to the DOM
  renderCell(gPacman.location, PACMAN);
  
}

function getNextLocation(keyboardEvent) {
  var nextLocation = {
    i: gPacman.location.i, 
    j: gPacman.location.j
  };
  
  switch (keyboardEvent.code) {
    case 'ArrowUp': 
      nextLocation.i--;
      break;
    case 'ArrowDown': 
      nextLocation.i++;
      break;
    case 'ArrowLeft': 
      nextLocation.j--;
      break; 
    case 'ArrowRight': 
      nextLocation.j++;
      break; 
      default: return null;          
  }
  return nextLocation;
}

function superFood(){
  var a = document.querySelectorAll('td');
  
}