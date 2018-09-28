var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';

getUrlData(url, json => {
    // console.log(json);
    var str = '';
    for(let i = 0; i < json.data.length; i++) {
        let block = json.data[i];
        str += `<a href="https://1boon.kakao.com/${block.path}">${block.title}</a><br>`
    }

    document.getElementById('wrap').innerHTML = str;
});

async function getUrlData(url, callback) {
    try {
        let data = await fetch(url);
        let json = await data.json();
        callback(json);
        console.log('Fetch Success');
    } catch (err) {
        console.log('Fetch Error : -S', err);
    }
}