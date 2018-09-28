var wrap = document.querySelector("#wrap");

// ES5
// fetch('./data11.json')
// .then(response => response.json())
// .then(json => wrap.innerText = json.main)
// .catch(err => {
//     console.log("에러 발생", err);
//     wrap.innerText = err
// });

// ES6
async function nodap() {
    try {
        let data = await fetch('./data.json');
        let json = await data.json();
        wrap.innerText = json.main;
        console.log('Fetch Success');
    } catch (err) {
        console.log('Fetch Error : -S', err);
    }
};

function jsonp () {
    var head = document.querySelector('head');
    var script = document.createElement('script');
    script.src = './jsonp.js';
    head.appendChild(script);
}

function callback(data) {
    console.log(data);
}
jsonp();

// XHR

