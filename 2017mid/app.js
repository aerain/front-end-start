var wrap = document.querySelector('wrap');
var page = 1;
var nodap = '';

function getData(find, where, selector) {
    nodap = selector;
    let pagesize = where === 'more' ? 5 : 10;
    page = where == 'more' ? (page < 3 ? 3 : page + 1) : 1;
    let script = document.createElement('script');
    script.src= `http://1boon.kakao.com/ch/${find}.json?pagesize=${pagesize}&page=${page}&callback=done`;
    script.className = 'data';
    document.body.appendChild(script);
}

function done(item) {
    console.log(page, item);
    if(item.data.length === 10) {
        let firstItem = item.data.slice(0, 4);
        let secondItem = item.data.slice(5, 9);
        addToDiv(firstItem, '#first_result');
        addToDiv(secondItem, '#second_result');
    } else {
        addToDiv(item.data, nodap);
    }
    
}

function addToDiv(item, selector) {
    let div = document.querySelector(selector);
    let str = '';
    item.map(data => {
        str += data.title;
    })
    div.innerHTML = str;
}

getData('trending', '', '');

