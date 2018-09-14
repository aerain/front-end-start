// var btn = document.getElementById('btn');

var btn = document.querySelector('#butn');
var buttonClick = 0;
var click = event => {
    console.log('바보', ++buttonClick, event);
    console.log(this, event, event.type, event.currentTarget);
    // window.open('http://daum.net', '', 'width=500, height=500');
}

btn.addEventListener('click', click);