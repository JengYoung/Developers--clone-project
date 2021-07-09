interface CarouselFormat {
    names: object;
    initialize(): void;
    HandleEvent(): void;
    renderCard(data: DataFormat): void;
    customCreateElement(tag: string, name: string): HTMLElement;
    customAppendChild(parent: HTMLElement, ...elems: Array<HTMLElement>): void;
}

interface DataFormat {
    title?: string;
    head: string;
    url: string;
    image: string;
    copy?: string;
    receipt?: string;
    test?: string;
    language?: string;
    schedule?: string;
}

interface Names {
    [name: string]: string;
}

abstract class Carousel implements CarouselFormat {
    protected num: number;
    protected windowWidth: number;
    protected nowWidth: number;
    protected moveWidth: number;
    protected dataLength: number;
    constructor(protected readonly datas: Array<DataFormat>, protected readonly blockName: string) {
        this.num = 0; // 현재 페이지 number
        this.windowWidth; // 초기 윈도우 너비 -> HandleResize에서 받아옴
        this.nowWidth; // 카드 너비 -> initialize
        this.moveWidth; // 한 번 움직일 때마다의 값 -> HandleResize에서 받아옴
        this.dataLength; // 데이터 길이 -> HandleResize에서 조정도 할 예정.
    }
    abstract names: Names;
    abstract initialize(): void;
    abstract HandleEvent(): void;
    abstract renderCard(data: DataFormat): void;
    customCreateElement(tag: string, name: string): HTMLElement {
        const elem = document.createElement(tag);
        elem.className = name;
        return elem;
    };
    customAppendChild(parent: HTMLElement, ...elems: Array<HTMLElement>) {
        [...elems].map(elem => parent.appendChild(elem));
    };
        // 너비를 구한다
    protected setWidth(windowWidth: number): number {
        /**
         * mobile-and-tablet에서만 조정수치가 달라짐.
         */
        if (991 < windowWidth) {
            return 1160;
        }
        else if (991 < windowWidth && windowWidth <= 1200) {
            return (windowWidth - 56);
        }
        else if (767 <= windowWidth && windowWidth <= 991) {
            return (windowWidth - 124);
        }
        else if (574 < windowWidth && windowWidth < 767) {
            return (windowWidth) / 2 - 45;
        } else {
            return windowWidth - 64;
        }
    }

    // moveCardWidth를 구한다
    protected setMoveWidth(windowWidth: number): number {
        /**
         * mobile-and-tablet에서만 조정수치가 달라짐.
         */
        if (991 <windowWidth) {
            return (this.nowWidth + 16);
        }
        else if (574 < windowWidth && windowWidth < 767) {
            return (this.nowWidth * 2 + 64);
        } else {
            return (this.nowWidth + 32);
        }
    }

    // 버튼 개수를 정한다.
    protected setDataLength(windowWidth: number): number {
        // mobile-and-tablet부터는 버튼이 1/2개로 줄어듦. (만약 9개라면, 올림을 해서 5개로 계산)
        if (windowWidth < 767) return Math.ceil(this.datas.length / 2);
        else return this.datas.length;
    }

    // num 숫자를 정한다. (버튼 active를 위해)
    protected setNum(windowWidth: number): number {
        let res:number = 0;
        document.querySelectorAll(`.${this.names.card}`).forEach((card: HTMLElement, idx: number) => {
            if (card.classList.contains(`${this.names.card}--active`)) {
                res = idx;  
            }
        })
        if (windowWidth < 767) return Math.floor(res / 2);
        else return res;
    }

    // 버튼을 필요한만큼 다시 조정
    protected reRenderPageBtn(): void {
        const $pageBtns = document.querySelector(`.${this.names.pageBtns}`);
        const differenceCount = $pageBtns.children.length - this.dataLength;
        if (!differenceCount) return;
        // 만약 0보다 작다면 버튼을 더 넣어줘야 함.
        else if (differenceCount < 0) {
            this.renderPageBtn(-differenceCount);
        } else {
            for (let i = 0; i < differenceCount; i++) {
                const $pageBtn = document.querySelector(`.${this.names.pageBtn}`);
                $pageBtns.removeChild($pageBtn)
            }
        }
        this.checkActive(this.names.pageBtn);
    }

    // 버튼 생성
    private renderPageBtn(count: number): void {
        const $pageBtns: HTMLElement = document.querySelector(`.${this.names.pageBtns}`);
        for (let i:number = 0; i < count; i++) {
            const $pageBtn:HTMLElement = document.createElement('li');
            $pageBtn.className = this.names.pageBtn;
            $pageBtns.appendChild($pageBtn);
        };
        this.checkActive(this.names.pageBtn);
        // const $pageBtn = document.querySelectorAll(`.${this.names.pageBtn}`);
        // $pageBtn[0].classList.add(`${this.names.pageBtn}--active`);
    };

    private checkActive(name: string) {
        const nodeList = document.querySelectorAll(`.${name}`);
        if (this.nowWidth < 767 && name !== this.names.pageBtn) {
            nodeList.forEach((node: HTMLElement) => {
                node.classList.toggle(`${name}--active`, node === nodeList[this.num * 2])
            })
        } else {
            nodeList.forEach((node: HTMLElement) => {
                node.classList.toggle(`${name}--active`, node === nodeList[this.num])
            })
        }
    }
}

export default class Content extends Carousel {
    readonly names: Names;
    constructor(protected readonly datas: Array<DataFormat>, protected readonly blockName: string) {
        super(datas, blockName);
        this.names = {
            link: `${this.blockName}__link`,
            image: `${this.blockName}__image`,
            info: `${this.blockName}__info`,
            title: `${this.blockName}__title`,
            head: `${this.blockName}__head`,
            times: `${this.blockName}__times`,
            periodReceipt: `${this.blockName}__period-receipt`,
            periodTest: `${this.blockName}__period-test`,
            pageBtn: `${this.blockName}__page-btn`,
            pageBtns: `${this.blockName}__page-btns`,
            card: `${this.blockName}__card`,
            cards: `${this.blockName}__cards`,
            moveBtn: `${this.blockName}__move-btn`,
            leftBtn: `${this.blockName}__move-left`,
            rightBtn: `${this.blockName}__move-right`,
            cardItem: `${this.blockName}__card-item`,
            schedule: `${this.blockName}__schedule`
        }
        this.initialize();
    }
    initialize() {
        this.windowWidth = window.innerWidth;
        this.num = this.setNum(this.windowWidth);
        this.nowWidth = this.setWidth(this.windowWidth);
        this.moveWidth = this.setMoveWidth(this.windowWidth);
        this.dataLength = this.setDataLength(this.windowWidth);
        this.reRenderPageBtn();
        this.datas.forEach((data: DataFormat) => {
            this.renderCard(data)
        })
    }
    
    HandleEvent() {
        function HandleMoveBtn(e:MouseEvent): void {
            const $cards:HTMLElement = document.querySelector(`.${this.names.cards}`);

            const target = e.target as HTMLElement;
            if (this.num && target.classList.contains(this.names.leftBtn)) {
                this.num--;
            }  else if (this.num !==  this.dataLength - 1 && target.classList.contains(this.names.rightBtn)) {
                this.num++
            } 
            else return;

            $cards.style.transform = `translate(${-this.moveWidth * this.num}px, 0)`;
            this.checkActive(this.names.pageBtn);
            this.checkActive(this.names.card);
            this.checkDisable()
        }
        const pageBtn = document.querySelector(`.${this.names.pageBtn}`);
        pageBtn.addEventListener('click', HandleMoveBtn.bind(this));
    }
    renderCard(data: DataFormat) {
        // 접수 일정을 구함
        function getSchedule(data: string): string {
            const arr: string[] = []
            const schedules = data.replace(" ", "").split('~');
            const dayArr = ['일', '월', '화', '수', '목', '금', '토'];
            schedules.forEach((schedule: string) => {
                const [year, month, day] = schedule.split('-')
                const date = new Date(schedule);
                arr.push(`${month}.${day}.(${dayArr[date.getDay()]})`)
            })
            if (arr.length === 1) return arr[0];
            return arr.join(' ~ ');
        }
        const $cards: HTMLElement = document.querySelector(`.${this.names.cards}`);
        const $card: HTMLElement = this.customCreateElement('li', this.names.card);
        const $cardItem = this.customCreateElement('div', this.names.cardItem);

        const $link = this.customCreateElement('a', this.names.link);
        $link.setAttribute('href', data.url);
        const $image = this.customCreateElement('img', this.names.image);
        $image.setAttribute('src', data.image);
        $image.setAttribute('alt', '프로그래머스 행사');

        const $info = this.customCreateElement('div', this.names.info);
        const $title = this.customCreateElement('h6', this.names.title);
        $title.textContent = data.title;
        console.log(data)
        const $head = this.customCreateElement('h3', this.names.head);
        $head.textContent = data.head;
        const $times = this.customCreateElement('h4', this.names.times);
        const $copy: HTMLElement = data.copy ? this.customCreateElement('h6', `${this.blockName}__copy`) : null;
        if($copy) $copy.textContent = data.copy;

        const $periodReceipt = data.receipt ? this.customCreateElement('span', this.names.periodReceipt) : null;
        if ($periodReceipt) $periodReceipt.textContent = `접수 마감: ${getSchedule(data.receipt)}`;
        const $schedule = data.schedule ?  this.customCreateElement('span', this.names.schedule) : null;
        if ($schedule) $schedule.textContent = `일정: ${getSchedule(data.schedule)}`;

        if ($periodReceipt) this.customAppendChild($times, $periodReceipt);
        if ($schedule) this.customAppendChild($times, $schedule);
        this.customAppendChild($info, $title, $head, $times);
        if ($copy) this.customAppendChild($info, $copy)
        this.customAppendChild($link, $image);
        this.customAppendChild($cardItem, $info, $link);
        this.customAppendChild($card, $cardItem);
        this.customAppendChild($cards, $card)
    }
}