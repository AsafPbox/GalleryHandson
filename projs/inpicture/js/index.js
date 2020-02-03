'use strict';

var gQuests = [
    { id: 1, opt: ['The Pug is Playing', 'The Pug is drinking'], correctOptIndex: 0 },
    { id: 2, opt: ['The Pug is running', 'The Pug is sleeping'], correctOptIndex: 1 },
    { id: 3, opt: ['The Pug is taking a bath', 'The Pug is exercising'], correctOptIndex: 0 }
];

var gCurrQuestIdx;

function init() {
    createQuests(gQuests)
}

function createQuests(questionsArray) {

    questionsArray.sort(() => Math.random() - 0.5);

    var elButton1 = document.querySelector('.button1');
    var elButton2 = document.querySelector('.button2');
    var currQuest = questionsArray[0];
    gCurrQuestIdx = 0;

    elButton1.innerText = currQuest.opt[0];
    elButton2.innerText = currQuest.opt[1];

    document.querySelector('.questions').style.backgroundImage = 'url("./img/' + currQuest.id + '.jpg")'
}

function checkAnswer(optIdx) {

    var currArray = gQuests[gCurrQuestIdx];
    var userAnswer = optIdx.innerText
    if (userAnswer === currArray.opt[currArray.correctOptIndex]) {
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {
            document.querySelector('.restartButton').style.display = 'block';
            return alert('Victory!');
        }
        renderQuest(gCurrQuestIdx);
    } else { console.log('Wrong Answer !') };
}

function renderQuest(nextQuestion) {

    var elButton1 = document.querySelector('.button1');
    var elButton2 = document.querySelector('.button2');
    var currArray = gQuests[nextQuestion]

    elButton1.innerText = currArray.opt[0];
    elButton2.innerText = currArray.opt[1];

    document.querySelector('.questions').style.backgroundImage = 'url("./img/' + currArray.id + '.jpg")'
}

function restartGame() {
    document.querySelector('.restartButton').style.display = 'none';
    createQuests(gQuests)
}