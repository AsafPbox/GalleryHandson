'use strict';

var gNum;
var gNumMax = 16;

function createBoard(numsArray) {

    var elBoard = document.querySelector('.board');

    if (numsArray.length === 16) {
        var rowNum = 4;
        var cellNum = 4;
    }
    else if (numsArray.length === 25) {
        var rowNum = 5;
        var cellNum = 5;
    }
    else if (numsArray.length === 32) {
        var rowNum = 8;
        var cellNum = 4;
    }

    var strHtml = `
    <table class="gameBoard" border="2">
        <tbody>`

    for (var i = 0; i < rowNum; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < cellNum; j++) {
            strHtml += '<td onclick="cellClicked(this)">' + numsArray.splice(Math.floor(Math.random() * numsArray.length), 1)[0]; + '</td>'
        }
        strHtml += '</tr>'
    }

    strHtml += `
    </tbody>
    </table>`

    elBoard.innerHTML = strHtml;
}

function cellClicked(clickedNum) {
    var clickedButton = clickedNum.innerText
    if (clickedButton === gNum.toString()) {
        if (clickedButton === '1') console.log('Start time : ' + startTime())
        clickedNum.style.backgroundColor = 'green'
        console.log(clickedButton)
        gNum++
        if (clickedButton === gNumMax.toString()) return alert('Game Over - Select new lvl')
        document.querySelector('.nextNumber').style.display = 'block'; // need to remove repeat 
        document.querySelector('.nextNumber').innerText = 'Next Number Is : ' + gNum;
    }

}

function createArrayByNum(elButton) {
    var numsArray = [];
    if (elButton.innerText === 'Easy Game') {
        console.log('easy Game', elButton.innerText);
        for (var i = 1; i <= 16; i++) { numsArray.push(i) };
        gNum = 1;
        gNumMax = 16;
        document.querySelector('.nextNumber').style.display = 'none';
        document.querySelector('.timer').style.display = 'none';
    } else if (elButton.innerText === 'Medium Game') {
        console.log('medium game', elButton.innerText);
        for (var i = 1; i <= 25; i++) { numsArray.push(i) };
        gNum = 1;
        gNumMax = 25;
        document.querySelector('.nextNumber').style.display = 'none';
        document.querySelector('.timer').style.display = 'none';
    } else if (elButton.innerText === 'Extreme Game') { // can switch to else;
        console.log('extreme game', elButton.innerText);
        for (var i = 1; i <= 32; i++) { numsArray.push(i) };
        gNum = 1;
        gNumMax = 32;
        document.querySelector('.nextNumber').style.display = 'none';
        document.querySelector('.timer').style.display = 'none';
    }
    createBoard(numsArray);
}

function startTime() {
    document.querySelector('.timer').style.display = 'block';
    return document.querySelector('.timer').innerText = 'Start time : ' + new Date().toString().split(' ')[4];
}