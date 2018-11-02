var board = document.querySelector('#board'),
    levelSelector = document.querySelector('.level'),
    scoreSelector = document.querySelector('.score'),
    lifeSelector = document.querySelector('.life');

var levelTimer = 10000,
    blockAppearTimer = 2000,
    levelUpReduceAppearTimer = 200;

var score = 0,
    level = 1,
    life = 10;

var boardWidth = 550,
    boardHeight = 550;

function addScore() {
    score++;
    setScore();
}
function setScore() {
    scoreSelector.innerText = `Score : ${score}`;
}

function addLevel() {
    level++;
    setLevel();
}

function setLevel() {
    levelSelector.innerText = `Level : ${level}`;
}

function reduceLife() {
    life--;
    setLife();
    if(life == 0) gameOver();
}
function setLife() {
    lifeSelector.innerText = `Life : ${life}`;
}

function randomCoordinate() {
    let block = document.querySelector('.block');

    let top = Math.random() * boardWidth;
    let left = Math.random() * boardHeight;
    block.style.top = top + 'px';
    block.style.left = left + 'px';
}

function onTime() {
    reduceLife();
    randomCoordinate();
}

function placeBlock() {
    clearInterval(blockInterval);
    addScore();
    randomCoordinate();
    blockInterval = setInterval(onTime, blockAppearTimer);
}

function clickBoard(event) {
    let click = event.currentTarget;

    if(click.className !== 'block') {
        onTime();
    } else {
        placeBlock();
    }
}
function createBlock() {
    let block = document.createElement('div');
    block.className = 'block';

    block.addEventListener('click', placeBlock);
    board.appendChild(block);
}

function levelUp() {
    addLevel();
    blockAppearTimer -= levelUpReduceAppearTimer; // 레벨업 될때마다 ReduceTimer 만큼 깝니다. 

    // 리스폰시간이 0일때
    if(blockAppearTimer <= 0) {
        clearInterval(levelUp);
        alert('사람입니까?');
        return;
    }

    clearInterval(blockInterval);
    blockInterval = setInterval(onTime, blockAppearTimer);
}

function gameOver() {
    alert('쥐쥐');
    clearInterval(levelUp);
    clearInterval(blockInterval);
}

board.addEventListener('click', clickBoard);

createBlock();

var blockInterval = setInterval(onTime, blockAppearTimer);
var levelUp = setInterval(levelUp, levelTimer);
