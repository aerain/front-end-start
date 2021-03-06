var query = '제주대학교';
var uri = 'https://dapi.kakao.com/v2/search/web';
var inst;
document.querySelector('.search > .inputtext').addEventListener('keypress', events => {
    let key = (events.which || events.keyCode);
    let search = events.target.value;
    if(key === 13 && search.trim() !== '') {
        if(inst !== undefined) {
            let button = inst.morebutton.querySelector('button');
            button.removeEventListener('click', inst.getData);
            inst = undefined;
        }
        inst = new ES6Search(appkey, search);
        inst.container.innerHTML = '';
        inst.getData();
        if(inst.morebutton.style.display !== 'block') {
            inst.morebutton.style.display = 'block';
        }
        let button = inst.morebutton.querySelector('button');
        button.addEventListener('click', inst.getData);
    }
});

// function ES5Search(appkey, query) {
//     this.query = query;
//     this.uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
//     this.options = {
//         method: 'GET',
//         headers: {
//             'Authorization': `KakaoAK ${appkey}`,
//         }
//     }
//     this.getData = async function () {
//         fetch(this.uri, this.options)
//         .then(function(data) {
//             return data.json();
//         })
//         .then(function(json) {
//             console.log(json);
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
//     }
// }

class ES6Search {
    constructor(appkey, query) {
        this.query = query;
        this.count = 1;
        this.size = 20;
        this.uri = `https://dapi.kakao.com/v2/search/web?query=${query}`;
        this.options = {
            method: 'GET',
            headers: {
                'Authorization': `KakaoAK ${appkey}`,
            }
        };
        this.list = [];
        this.container = document.querySelector('.container');
        this.morebutton = document.querySelector('.showmethecontent');
        this.isEnd = false;
        this.getData = this.getData.bind(this);
    }

    renderItem (item) {
        let date = new Date(item.datetime);
        let dateToString = `
        ${date.getFullYear()}년 
        ${date.getMonth()}월 
        ${date.getDay()}일 
        ${date.getHours()}시 
        ${date.getMinutes()}분 
        ${date.getSeconds()}초 `;

        let block = document.createElement('div');
        block.className = 'block';
        block.innerHTML = 
        `
            <div class='title'>
                <a href='${item.url}'>${item.title}</a>
            </div>
            <div class='contents'>${item.contents}</div>
            <div class='datetime'>${dateToString}</div>
        `
        return block;
    }

    async getData () {
        try {
            if(!this.isEnd) {
                let res = await fetch(`${this.uri}&page=${this.count}&size=${this.size}`, this.options);
                let data = await res.json();
                console.log(data);
                this.isEnd = data.meta.is_end;
                if (data.documents) {
                    data.documents.map(item => {
                        this.container.appendChild(this.renderItem(item));
                    });
                } else {
                    this.container.innerText = "검색결과가 없당께요";
                }
                this.count++;
            }
            
        } catch (err) {
            console.log(err);
        }
    }
}





// new ES5Search(appkey, query).getData();



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