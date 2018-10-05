
var appkey = '2a47db4cedcec2962ab36f43d726679f';
var query = '제주대학교';




// es6

(async function() {
    try {
        let headers = new Headers();
        headers.append('Authorization', `KakaoAK ${appkey}`);
        let options = {
            method: 'GET',
            headers
        }
        let uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
        let res = await fetch(uri, options);
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    } 
})();

// es5

// (function () {
//     let uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
//     fetch(uri, options)
//     .then(function(data) {
//         data.json().then(function(json) {
//             console.log(json);
//         })
//     })
// })();