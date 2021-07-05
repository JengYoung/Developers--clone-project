import throttle from "./Throttle.ts";

interface DataFormat {
    name: string;
    url: string;
    image: string;
    receipt: string;
    test: string;
    language: string[];
}
interface Names {
    [name: string]: string;
}


export default class Program {
    private readonly names: Names;
    private num: number;
    private dataLength: number;
    private nowWidth: number;
    private moveWidth: number;
    private windowWidth: number;
    // 받아들여온 데이터는 수정 불가하도록 readonly로 작성
    constructor(private readonly datas: Array<DataFormat>) {
        this.names = {
            programLink: "programs__link",
            programImage: "programs__image",
            programInfo: "programs__program-info",
            programTitle: "programs__program-title",
            programTimes: "programs__program-times",
            programPeriodReceipt: "programs__period-receipt",
            programPeriodTest: "programs__period-test",
            programLanguage: "programs__program-language",
            languageItem: "programs__language-item",
            moreLanguage: "programs__more-language",
            pageBtn: "programs__page-btn",
            pageBtns: "programs__page-btns",
            programCard: "programs__program-card",
            programCards: "programs__program-cards",
            moveBtn: "programs__move-btn",
            leftBtn: "programs__move-left",
            rightBtn: "programs__move-right",
            cardItems: "programs__card-items"
        }; // 클래스명을 관리함.
        this.num = 0; // 현재 페이지 number
        this.windowWidth; // 초기 윈도우 너비 -> HandleResize에서 받아옴
        this.nowWidth; // 카드 너비 -> initialize
        this.moveWidth; // 한 번 움직일 때마다의 값 -> HandleResize에서 받아옴
        this.dataLength; // 데이터 길이 -> HandleResize에서 조정도 할 예정.
        this.initialize()

        this.render(); // 카드와 pagination 버튼 생성
        this.HandleEvents(); // 이벤트 함수를 모아놓음
        this.HandleResize(); // 초기 card width 세팅 및 리사이즈 이벤트 시 실행될 함수
        this.checkDisable(); // 버튼의 disable 속성 부여 여부 체크
    }

    private initialize(): void {
        this.windowWidth = window.innerWidth;
        this.num = this.setNum(this.windowWidth);
        this.nowWidth = this.setWidth(this.windowWidth);
        this.moveWidth = this.setMoveWidth(this.windowWidth);
        this.dataLength = this.setDataLength(this.windowWidth);
        this.reRenderPageBtn();
    }
    private renderCard(): void {
        function makeLinkElement(parent:HTMLElement, data: DataFormat): void {
            // 링크주소를 포함함
            const $programLink:HTMLElement = document.createElement('a');
            $programLink.className = this.names.programLink;
            $programLink.setAttribute("href", data.url);
            
            // 이미지를 포함함
            const $programImage: HTMLElement = document.createElement('img');
            $programImage.className = this.names.programImage;
            $programImage.setAttribute('src', data.image);
            $programImage.setAttribute('alt', "채용 프로그램 이미지");
            
            // programLink에 image를 넣어줌
            $programLink.appendChild($programImage);

            //부모노드에게 programLink를 넣어줌
            parent.appendChild($programLink);
        }

        function makeInfoElement(parent: HTMLElement, data: DataFormat): void {
            const $programInfo:HTMLElement = document.createElement("section");
            $programInfo.className = this.names.programInfo;

            const $programTitle:HTMLElement = document.createElement("h3");
            $programTitle.className = this.names.programTitle;
            $programTitle.textContent = data.name;

            const $programTimes:HTMLElement = document.createElement("h4");
            $programTimes.className = this.names.programTimes;

            // programInfo에 title, times를 넣어줌. 
            $programInfo.appendChild($programTitle);
            $programInfo.appendChild($programTimes);

            const $programPeriodReceipt:HTMLElement = document.createElement("span");
            $programPeriodReceipt.className = this.names.programPeriodReceipt;
            $programPeriodReceipt.textContent = `접수: ${data.receipt}`;
            const $programPeriodTest:HTMLElement = document.createElement("span");
            $programPeriodTest.className = this.names.programPeriodTest;
            $programPeriodTest.textContent = `테스트: ${data.test}`;
            
            const $programLanguage:HTMLElement = document.createElement('ul');
            $programLanguage.className = this.names.programLanguage;
            if (data.language.length > 8) {
                const $moreLanguage: HTMLElement = document.createElement('li');
                const moreLanguageArr: string[] = [];
                $moreLanguage.className = this.names.moreLanguage;
                data.language.forEach((each:string, idx: number) => {
                    if (idx <= 7) {
                        const $languageItem:HTMLElement = document.createElement('li');
                        $languageItem.textContent = each;
                        $languageItem.className = this.names.languageItem;
                        $programLanguage.appendChild($languageItem);
                    } else {
                        moreLanguageArr.push(each);
                    }
                })
                $moreLanguage.textContent = `+${moreLanguageArr.length}`
                $moreLanguage.dataset.language = moreLanguageArr.join(', ')
                $programLanguage.appendChild($moreLanguage);
            } else {
                data.language.forEach((each: string) => {
                    const $languageItem:HTMLElement = document.createElement('li');
                    $languageItem.textContent = each;
                    $languageItem.className = this.names.languageItem;
                    $programLanguage.appendChild($languageItem);
                })
            }
            $programInfo.appendChild($programLanguage);

            // programTimes에 Receipt, Test를 넣어줌.
            $programTimes.appendChild($programPeriodReceipt);
            $programTimes.appendChild($programPeriodTest);

            parent.appendChild($programInfo);
        };

        function makeLabelElement(parent:HTMLElement, data:DataFormat): void {
            const label:HTMLElement = document.createElement('div');
            label.className = "programs__label";
            parent.appendChild(label);
        };
        
        // forEach가 map보다 메모리를 저장하지 않기에 빠르므로 forEach로 처리.
        this.datas.forEach((data: DataFormat, idx: number): void => {
            const $programCard:HTMLElement = document.createElement('li'); 
            $programCard.className = this.names.programCard;
            
            const $cardItem:HTMLElement = document.createElement('div')
            $cardItem.classList.add(this.names.cardItems);

            makeLabelElement.bind(this)($programCard, data);
            makeLinkElement.bind(this)($cardItem, data);
            makeInfoElement.bind(this)($cardItem, data);
            
            // 첫번째라면 클래스명 추가
            if(!idx) $programCard.classList.add(`${this.names.programCard}--active`);
            $programCard.appendChild($cardItem);
            document.querySelector(`.${this.names.programCards}`).appendChild($programCard)
        })
    }

    // 버튼을 필요한만큼 다시 조정
    private reRenderPageBtn(): void {
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
    private render(): void {
        this.renderCard(); // DOMContentLoad될 시 카드를 렌더링함
        this.renderPageBtn(this.dataLength); // DOMContentLoad시 pagination할 밑의 버튼을 렌더링함.
    }

    // 너비를 구한다
    private setWidth(windowWidth: number): number {
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
            return (windowWidth) / 2 - 45
        } else {
            return windowWidth - 64;
        }
    }

    // moveCardWidth를 구한다
    private setMoveWidth(windowWidth: number): number {
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
    private setDataLength(windowWidth: number): number {
        // mobile-and-tablet부터는 버튼이 1/2개로 줄어듦. (만약 9개라면, 올림을 해서 5개로 계산)
        if (windowWidth < 767) return Math.ceil(this.datas.length / 2);
        else return this.datas.length;
    }

    // num 숫자를 정한다. (버튼 active를 위해)
    private setNum(windowWidth: number): number {
        let res:number = 0;
        document.querySelectorAll(`.${this.names.programCard}`).forEach((card: HTMLElement, idx: number) => {
            if (card.classList.contains(`${this.names.programCard}--active`)) {
                res = idx;  
            }
        })
        if (windowWidth < 767) return Math.floor(res / 2);
        else return res;
    }

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
    

    private HandleResize(e?:MouseEvent): void {
        this.initialize()
        const $cardItems: NodeListOf<HTMLElement> = document.querySelectorAll(`.${this.names.cardItems}`);
        $cardItems.forEach((cardItem: HTMLElement) => {
            cardItem.style.width = `${this.nowWidth}px`;
        })
        const $programCards:HTMLElement = document.querySelector(`.${this.names.programCards}`);
        $programCards.style.transform = `translate(${-this.moveWidth * this.num}px, 0)`;
    };

    private HandleEvents(): void {
        function HandlePageBtn(e:MouseEvent): void {

            const target = e.target as HTMLElement;
            const pageBtns:NodeListOf<HTMLElement> = document.querySelectorAll(`.${this.names.pageBtn}`);
            const $programCards:HTMLElement = document.querySelector(`.${this.names.programCards}`);

            if (!target.classList.contains(this.names.pageBtn)) return;
            pageBtns.forEach((btn, idx) => {
                btn.classList.toggle(`${this.names.pageBtn}--active`, btn === target)
                if (btn === target) this.num = idx;
            })
            // this.checkActive(this.names.pageBtn);

            $programCards.style.transform = `translate(${-this.moveWidth * this.num}px, 0)`;
            this.checkDisable()
        }
        function HandleMoveBtn(e:MouseEvent): void {
            const $programCards:HTMLElement = document.querySelector(`.${this.names.programCards}`);

            const target = e.target as HTMLElement;
            if (this.num && target.classList.contains(this.names.leftBtn)) {
                this.num--;
            }  else if (this.num !==  this.dataLength - 1 && target.classList.contains(this.names.rightBtn)) {
                this.num++
            } 
            else return;

            $programCards.style.transform = `translate(${-this.moveWidth * this.num}px, 0)`;
            this.checkActive(this.names.pageBtn);
            this.checkActive(this.names.programCard);
            this.checkDisable()
        }
        document.querySelector(`.${this.names.moveBtn}`).addEventListener('click', HandleMoveBtn.bind(this));
        document.querySelector(`.${this.names.pageBtns}`).addEventListener('click', HandlePageBtn.bind(this));
        window.addEventListener('resize', throttle(this.HandleResize.bind(this)));
    }

    private checkDisable(): void {
        document.querySelector(`.${ this.names.leftBtn}`).classList.toggle(`${ this.names.leftBtn}--disable`, !this.num);
        document.querySelector(`.${ this.names.rightBtn}`).classList.toggle(`${ this.names.rightBtn}--disable`, this.num === this.dataLength - 1);
    }
}