// var id = document.getElementById("nodap");
// id.innerText="YES!"


// var $$ = value => document.querySelectorAll(value);

// var idquerySelector = $$('div');

var div = document.createElement('div');
div.style.border = '1px solid red';
div.innerHTML = '<h2>바보</h2>';
// div.innerText += '<h1>입니다.</h1>';
document.body.appendChild(div);

var javasc = document.createElement('script');
javasc.src = './app.js';
javasc.type = 'text/javascript';

var head = document.querySelector('head');
head.appendChild(javasc);


