var navigation = document.querySelector('ul.nav.nav-tabs');
var print = document.querySelector('div.print-list');
var onLoading = document.querySelector('div#list>div.text-center');
var moreButton = document.querySelector('div.container>div.text-center');

class Middle {
    
    /**
     * constructor 
     * @param {*} navigation 
     * @param {*} print 
     */
    constructor(navigation, print, onLoading, moreButton) {
        this.navigation = navigation;
        this.print = print;
        this.onLoading = onLoading;
        this.moreButton = moreButton;
        this.hasNext = true;
        this.activeList = this.navigation.querySelector('.active');
        this.uri = 'https://1boon.kakao.com/ch/';
        this.pagesize = 14;
        this.page = 1;

        this.navigationAddEventListener = this.navigationAddEventListener.bind(this);
        this.activeButton = this.activeButton.bind(this);
        this.setList = this.setList.bind(this);

        this.navigationAddEventListener();
        this.setList();
    }

    /**
     * navigationAddEventListener
     * 이벤트 리스너 추가
     */
    navigationAddEventListener () {
        let liList = this.navigation.querySelectorAll('li');
        liList.forEach(item => item.addEventListener('click', this.activeButton));
        this.moreButton.addEventListener('click', () => this.setList(true));
    }
    activeButton (event) {
        let clickedButton = event.target.tagName === 'LI' ? event.target : event.target.parentNode;

        // 현재 액티브된 버튼과 이벤트 발생한 곳이 다를 경우에만 실행.
        if(this.activeList !== clickedButton) {
            this.activeList.classList.remove('active');
            clickedButton.classList.add('active');
            this.activeList = clickedButton;

            
            this.setList();
        }
    }

    async setList(isMore = false, path = this.activeList.id) {
        // 더보기 누른 상태가 아니면 초기화
        if(!isMore) {
            this.page = 1;
            this.print.innerHTML = "";
        } else {
            if(!this.hasNext) {
                return;
            } else {
                this.page++;
            }
        }
        // 로딩중 토글
        this.onLoading.classList.remove('toggle-off');

        // fetch
        try {
            let uri = `${this.uri}${path}.json?pagesize=${this.pagesize}&page=${this.page}`;
            let response = await fetch(uri);
            let json = await response.json();
            console.log(path, json);
            this.hasNext = json.pagingInfo.hasNext;
            json.data.map(item => this.print.appendChild(this.renderBlock(item)));
        } catch (error) {
            this.print.innerHTML = `오류가 발생하였습니다. ${error}`
            console.log(error);
        } finally {
            //로딩중 토글
            this.onLoading.classList.add('toggle-off');
        }
    }

    renderBlock ({title, coverImage, path, totalView}) {
        let block = document.createElement('div');
        block.className = 'view-item';
        let link = document.createElement('a');
        link.href=`https://1boon.kakao.com/${path}`
        link.className='view-link';

        let image = document.createElement('img');
        image.style.backgroundImage = `url(${coverImage})`;
        image.className = 'view-image';

        let titleline = document.createElement('p');
        titleline.className = 'view-text';
        titleline.innerHTML = title;

        let viewline = document.createElement('p');
        viewline.className = 'view-text';
        viewline.innerHTML = `${totalView} 읽음`;

        link.appendChild(image);
        link.appendChild(titleline);
        link.appendChild(viewline);
        block.appendChild(link);
        
        return block;
    }
}

var x = new Middle(navigation, print, onLoading, moreButton);