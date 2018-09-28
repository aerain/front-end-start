var wrap = document.querySelector("#wrap");

// ES5
// fetch('./data11.json')
// .then(response => response.json())
// .then(json => wrap.innerText = json.main)
// .catch(err => {
//     console.log("에러 발생", err);
//     wrap.innerText = err
// });

// fetch('./detail.json')
// .then(function (response) {
//     return response.json();
// })
// .then(function (next) {
//     return next
// })
// ES6
(async function nodap() {
    try {
        let url = 'https://1boon.kakao.com/ch/enter.json';
        let data = await fetch(url);
        let json = await data.json();
        console.log(json.status);
        console.log('Fetch Success');
    } catch (err) {
        console.log('Fetch Error : -S', err);
    }
})();

// function jsonp () {
//     var head = document.querySelector('head');
//     var script = document.createElement('script');
//     script.src = './jsonp.js';
//     head.appendChild(script);
// }

// function callback(data) {
//     console.log(data);
// }
// jsonp();

// XHR

