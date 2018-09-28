var url = 'https://1boon.kakao.com/ch/enter.json';

class App {
    constructor(url) {
        this.url = url;
        this.count = 1;
        this.moreButton = document.querySelector('button');
        
        this.initialization();
    }

    initialization() {
        this.moreButton.addEventListener('click', this.getData.bind(this));
    }

    getData() {
        this.getUrlData(url, json => {
            // console.log(json);
            var str = '';
            for(let i = 0; i < json.data.length; i++) {
                let block = json.data[i];
                str += `<a href="https://1boon.kakao.com/${block.path}">${block.title}</a><br>`
            }
        
            document.getElementById('wrap').innerHTML += str;
        });
    }

    async getUrlData(url, callback) {
        try {
            let data = await fetch(url + `?page=${this.count++}&pagesize=10`);
            let json = await data.json();
            callback(json);
            console.log('Fetch Success');
        } catch (err) {
            console.log('Fetch Error : -S', err);
        }
    }
}

new App(url).getData();