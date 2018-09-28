var wrap = document.querySelector('.wrap');

var str = '';

for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        // let block = document.createElement('div');
        // block.className = (i + j) % 2 == 1 ? 'black' : 'white';
        // wrap.appendChild(block);
        str += `<div class='${(i + j) % 2 == 1 ? 'black' : 'white'}'></div>`  
    }
}
wrap.innerHTML = str;

var boxes = document.querySelectorAll('.wrap > div');

function select(event) {
    var selected = document.querySelector('.yellow');
    if(selected != null) {
        selected.classList.remove('yellow');
    }
    let block = event.currentTarget;
    block.classList.add('yellow');
    console.log('됨');
}

for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', select);
}




