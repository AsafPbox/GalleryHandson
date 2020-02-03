
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      if (cell === GHOST) {
        var className = 'cell cell' + i + '-' + j;
        strHTML += '<td class="' + className + '"> ' + getGhostHTML(GHOST, getRandomColor()) + ' </td>';
        continue;
      }
      var className = 'cell cell' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomEmptyCell2() { // name only for testing
  var emptyCell = document.querySelectorAll('td')[getRandomIntInclusive(0, 99)];
  while (emptyCell.innerText !== '.') {
    emptyCell = document.querySelectorAll('td')[getRandomIntInclusive(0, 99)];
  }
  return emptyCell.classList[1];
}

function getCellCoord(strCellId) {
  var coord = {};
  coord.i = +strCellId.substring(4, strCellId.lastIndexOf('-'));
  coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
  return coord;
}

function getRandomEmptyCell() {
  var randomCell = emptyCellsArray[getRandomIntInclusive(0, 61)]
  return randomCell;
}