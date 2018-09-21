var wrap = document.getElementsByClassName('wrap')[0];

for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        let block = document.createElement('div');
        block.className = ((j % 2) + (i % 2) == 1 ? 'black' : 'white');
        wrap.appendChild(block);
    }
}

