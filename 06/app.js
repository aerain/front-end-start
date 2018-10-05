
var appkey = '2a47db4cedcec2962ab36f43d726679f';
var query = '제주대학교';
var uri = 'https://dapi.kakao.com/v2/search/web';

function ES5Search(appkey, query) {
    this.query = query;
    this.uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
    this.options = {
        method: 'GET',
        headers: {
            'Authorization': `KakaoAK ${appkey}`,
        }
    }
    this.getData = async function () {
        fetch(this.uri, this.options)
        .then(function(data) {
            return data.json();
        })
        .then(function(json) {
            console.log(json);
        })
        .catch(function(error) {
            console.log(error);
        })
    }
}

class ES6Search {
    constructor(appkey, query) {
        this.query = query;
        this.uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
        this.options = {
            method: 'GET',
            headers: {
                'Authorization': `KakaoAK ${appkey}`,
            }
        }
    }

    async getData () {
        try {
            let res = await fetch(this.uri, this.options);
            let data = await res.json();
            console.log(data);
        } catch {
            console.log(err);
        }
    }
}



new ES5Search(appkey, query).getData();
new ES6Search(appkey, query).getData();


// es6

// (async function() {
//     try {
//         let headers = new Headers();
//         headers.append('Authorization', `KakaoAK ${appkey}`);
//         let options = {
//             method: 'GET',
//             headers
//         }
//         let uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
//         let res = await fetch(uri, options);
//         let data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     } 
// })();

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