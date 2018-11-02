var board = document.querySelector('#board'),
    levelSelector = document.querySelector('.level'),
    scoreSelector = document.querySelector('.score');

// var levelTimer = 20000;
var blockAppearTimer = 2000;

var score = 0,
    level = 0;

var boardWidth = 550,
    boardHeight = 550;

function addScore() {
    score++;
    setScore();
}
function setScore() {
    scoreSelector.innerText = `Score : ${score}`
}

function randomCoordinate() {
    let block = document.querySelector('.block');

    let top = Math.random() * boardWidth;
    let left = Math.random() * boardHeight;
    block.style.top = top + 'px';
    block.style.left = left + 'px';
}

function placeBlock(event) {
    clearInterval(blockInterval);
    addScore();
    randomCoordinate();
}
function createBlock() {
    let block = document.createElement('div');
    block.className = 'block';

    block.addEventListener('click', placeBlock);
    board.appendChild(block);
}

createBlock();

var blockInterval = setInterval(randomCoordinate, blockAppearTimer);

// function levelUp() {

//     blockAppearTimer -= 2000; // 레벨업 될때마다 2초씩 깝니다. 
// }

// setInterval(levelUp, levelTimer);