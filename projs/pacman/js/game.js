'use strict';
var WALL = '#';
var FOOD = '.';
var SUPER_FOOD = '&#127830';
var CHERRY = '&#127826';
var EMPTY = ' ';

var emptyCellsArray = [];
var gCherryInterval;

var gBoard;
var gGame = {
  score: 0,
  isOn: false
};

function init() {
  gBoard = buildBoard();

  createPacman(gBoard);
  createGhosts(gBoard);
  printMat(gBoard, '.board-container');
  gGame.isOn = true;
  
  // Added
  document.querySelector('.gameOver').setAttribute('hidden', true);
  gGame.score = 0;
  document.querySelector('header h3 span').innerText = gGame.score;
  gCherryInterval = setInterval(randomCherry, 15000)
  console.log('FoodCount :', emptyCellsArray.length)
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE - 2)) {

        board[i][j] = WALL;
      }

      if (i === 1 && j === 8) { board[i][j] = SUPER_FOOD }
      else if (i === 1 && j === 1) { board[i][j] = SUPER_FOOD }
      else if (i === 8 && j === 1) { board[i][j] = SUPER_FOOD }
      else if (i === 8 && j === 8) { board[i][j] = SUPER_FOOD }

      if (board[i][j] === '.') emptyCellsArray.push({i: i, j: j});
    }
  }
  console.log(board)
  return board;
}

function updateScore(value) {
  // Update both the model and the dom for the score
  gGame.score += value;
  document.querySelector('header h3 span').innerText = gGame.score;
  // console.log('gGame.Score :', gGame.score, 'h3 score :', document.querySelector('header h3 span').innerText, 'Food Count :', foodCount)
}


function gameOver() {
  console.log('Game Over function');
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;
  document.querySelector('.gameOver').removeAttribute('hidden');
}

function randomCherry() {
  var rand = getRandomCellFinal(emptyCellsArray)
  gBoard[rand.i][rand.j] = CHERRY
  renderCell(rand, CHERRY)
}

function getRandomCellFinal(array){
  var randCell = emptyCellsArray[Math.floor(Math.random() * emptyCellsArray.length)];
  // console.log('random value index :', emptyCellsArray.indexOf(randCell), 'values : i -', randCell.i, 'j -', randCell.j)
  emptyCellsArray.splice(emptyCellsArray.indexOf(randCell), 1)
  return {i:randCell.i, j:randCell.j}
}