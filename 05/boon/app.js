var url = 'https://1boon.kakao.com/ch/enter.json';

class App {
    constructor(url) {
        this.uri = url;
        this.count = 1;
        this.pagesize = 10;
        this.moreButton = document.querySelector('button');
        
        this.initialization();
    }

    initialization() {
        this.moreButton.addEventListener('click', this.getData.bind(this));
    }

    blockRender(item) {
        return (
            `<a href="https://1boon.kakao.com/${item.path}">${item.title}</a><br>`
        );
    }

    getData() {
        this.getUrlData(json => {
            var str = '';
            json.data.map(item => str += this.blockRender(item));
            document.getElementById('wrap').innerHTML += str;
        });
    }

    async getUrlData(callback) {
        if(fetch) { // fetch 사용가능 경우
            try {
                let data = await fetch(this.uri + `?page=${this.count++}&pagesize=${this.pagesize}`);
                let json = await data.json();
                callback(json);
                console.log('Fetch Success');
            } catch (err) {
                console.log('Fetch Error', err);
            }
        } else { // IE
            document.getElementById('wrap').innerText = '해당 브라우저에서는 지원하지 않습니다.';
        }
    }
}

new App(url).getData();