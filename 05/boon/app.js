var url = 'https://1boon.kakao.com/ch/enter.json';

class App {
    constructor(url) {
        this.uri = url;
        this.count = 1;
        this.pagesize = 10;
        this.wrap = document.getElementById('wrap');
        this.moreButton = document.querySelector('button');
        
        this.initialization();
    }

    initialization() {
        this.moreButton.addEventListener('click', this.getData.bind(this));
    }

    blockRender(item) {
        let url = `https://1boon.kakao.com/${item.path}`
        let block = document.createElement('div');
        block.className = 'block';
        
        let image = document.createElement('div');
        image.className = 'image-container';
        image.style.backgroundImage=`url(${item.img})`;

        let title = document.createElement('div');
        title.className = 'title-container';
        title.innerHTML = `<a class='link' href='${url}'>${item.title}</a>`;

        block.appendChild(image);
        block.appendChild(title);

        block.addEventListener('mouseover', () => {
            block.classList.add('selected');
            block.querySelector('.link').style.color="#d9a73d";
        })
        block.addEventListener('click', () => {
            document.location.href = url;
        })
        block.addEventListener('mouseleave', () => {
            block.classList.remove('selected');
            block.querySelector('.link').style.color=null;
        })
        return block;
    }

    async getData() {
        try {
            let json = await this.getUrlData();
            json.data.map(item => this.wrap.appendChild(this.blockRender(item)));
        } catch (err) {
            document.getElementById('wrap').innerText = '해당 브라우저에서는 지원하지 않습니다.';
        }
    }

    async getUrlData() {
        if(fetch) { // fetch 사용가능 경우
            try {
                let data = await fetch(this.uri + `?page=${this.count++}&pagesize=${this.pagesize}`);
                let json = await data.json();
                return json;
            } catch (err) {
                console.log('Fetch Error', err);
                return err;
            }
        } else { // IE
            document.getElementById('wrap').innerText = '해당 브라우저에서는 지원하지 않습니다.';
        }
    }
}

new App(url).getData();