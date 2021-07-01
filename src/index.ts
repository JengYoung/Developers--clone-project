import programData from "./datas/program-data.json";

window.addEventListener('DOMContentLoaded', () => {
    function openBar(e: Event): void {
        const $navBar: HTMLElement = document.querySelector('.nav__navbar');
        $navBar.classList.toggle('active');
    }
    function openSignUpPage(e:MouseEvent):void {
        window.location.href = 'https://programmers.co.kr/users/signup';
    }

    document.querySelector('.nav__btn').addEventListener('click', openBar);
    document.querySelector('.header__sign-up-btn').addEventListener('click',  openSignUpPage);

    interface DataFormat {
        name: string;
        url: string;
        image: string;
        receipt: string;
        test: string;
        language: string[];
    }

    class Program {
        private num: number;
        private dataLength: number;
        // 받아들여온 데이터는 수정 불가하도록 readonly로 작성
        constructor(private readonly datas: Array<DataFormat>) {
            this.num = 0;
            this.dataLength = this.datas.length;
            this.renderCard()
            this.renderPageBtn()
            this.HandleEvents()
            this.initialize()
            this.HandleResize();
        }
        private checkDisable(): void {
            const __leftBtn:string = 'programs__move-left';
            const __rightBtn:string = 'programs__move-right';

            document.querySelector(`.${ __leftBtn}`).classList.toggle(`${ __leftBtn}--disable`, !this.num);
            document.querySelector(`.${ __rightBtn}`).classList.toggle(`${ __rightBtn}--disable`, this.num === this.dataLength - 1);
        }
        private initialize(): void {
            const __programCard:string = 'programs__program-card';
            const __pageBtn:string = 'programs__page-btn';

            const $programCard: NodeListOf<Element> = document.querySelectorAll('.programs__program-card');
            const $pageBtn = document.querySelectorAll(`.${__pageBtn}`);

            $programCard[0].classList.add(`${__programCard}--active`);
            $pageBtn[0].classList.add(`${__pageBtn}--active`);
            this.checkDisable();
        }
        private makeLinkElement(parent:HTMLElement, data: DataFormat): void {
                // 링크주소를 포함함
                const $programLink:HTMLElement = document.createElement('a');
                $programLink.className = "programs__link";
                $programLink.setAttribute("href", data.url);
                
                // 이미지를 포함함
                const $programImage: HTMLElement = document.createElement('img');
                $programImage.className = "programs__image";
                $programImage.setAttribute('src', data.image);
                $programImage.setAttribute('alt', "채용 프로그램 이미지");
                
                // programLink에 image를 넣어줌
                $programLink.appendChild($programImage);

                //부모노드에게 programLink를 넣어줌
                parent.appendChild($programLink);
        }
        private makeInfoElement(parent: HTMLElement, data: DataFormat): void {
            const $programInfo:HTMLElement = document.createElement("section");
            $programInfo.className = "programs__program-info";

            const $programTitle:HTMLElement = document.createElement("h3");
            $programTitle.className = "programs__program-title"
            $programTitle.textContent = data.name;

            const $programTimes:HTMLElement = document.createElement("h4");
            $programTimes.className = "programs__program-times"

            // programInfo에 title, times를 넣어줌. 
            $programInfo.appendChild($programTitle);
            $programInfo.appendChild($programTimes);

            const $programPeriodReceipt:HTMLElement = document.createElement("span");
            $programPeriodReceipt.className = "programs__period-receipt";
            $programPeriodReceipt.textContent = `접수: ${data.receipt}`;
            const $programPeriodTest:HTMLElement = document.createElement("span");
            $programPeriodTest.className = "programs__period-test";
            $programPeriodTest.textContent = `테스트: ${data.test}`;
            
            const $programLanguage:HTMLElement = document.createElement('ul');
            $programLanguage.className = "programs__program-language"
            if (data.language.length > 8) {
                const $moreLanguage: HTMLElement = document.createElement('li');
                const moreLanguageArr: string[] = [];
                $moreLanguage.className = 'programs__more-language'
                data.language.forEach((each:string, idx: number) => {
                    if (idx <= 7) {
                        const $languageItem:HTMLElement = document.createElement('li');
                        $languageItem.textContent = each;
                        $languageItem.className = "programs__language-item"
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
                    $languageItem.className = "programs__language-item"
                    $programLanguage.appendChild($languageItem);
                })
            }
            
            // programTimes에 Receipt, Test를 넣어줌.
            $programTimes.appendChild($programPeriodReceipt);
            $programTimes.appendChild($programPeriodTest);
            $programTimes.appendChild($programLanguage);

            parent.appendChild($programInfo);
        };

        private makeLabelElement(parent:HTMLElement, data:DataFormat): void {
            const label:HTMLElement = document.createElement('div');
            label.className = "programs__label";
            parent.appendChild(label);
        };
        private renderPageBtn(): void {
            const $pageBtns:HTMLElement = document.querySelector('.programs__page-btns');
            for (let i:number = 0; i < this.datas.length; i++) {
                const $pageBtn:HTMLElement = document.createElement('li');
                $pageBtn.className = 'programs__page-btn'
                $pageBtns.appendChild($pageBtn);
            };
        };
        private renderCard(): void {

            // forEach가 map보다 메모리를 저장하지 않기에 빠르므로 forEach로 처리.
            this.datas.forEach((data: DataFormat): void => {
                const $programCard:HTMLElement = document.createElement('li'); 
                $programCard.className = "programs__program-card";
                const $cardItem:HTMLElement = document.createElement('div')
                $cardItem.classList.add("programs__card-items");
                this.makeLabelElement($programCard, data);
                this.makeLinkElement($cardItem, data);
                this.makeInfoElement($cardItem, data);

                $programCard.appendChild($cardItem);
                document.querySelector('.programs__program-cards').appendChild($programCard)
            })
        }
        private HandleResize(e?:MouseEvent): void {
            const windowWidth = window.innerWidth;
            const $cardItems: NodeListOf<HTMLElement> = document.querySelectorAll('.programs__card-items');
            $cardItems.forEach((cardItem: HTMLElement) => {
                if (windowWidth > 1192) cardItem.style.width = '1160px';
                else {
                    cardItem.style.width = `${windowWidth - 32}px`;
                    const __programCards:string = "programs__program-cards";
                    const $programCards:HTMLElement = document.querySelector(`.${__programCards}`);
                    $programCards.style.transform = `translate(${-(windowWidth - 16) * this.num}px, 0)`;
                }
            })
        };
        private HandleEvents(): void {
            function HandlePageBtn(e:MouseEvent): void {
                const __pageBtn: string = 'programs__page-btn';
                const __programCards:string = "programs__program-cards";

                const target = e.target as HTMLElement;
                const pageBtns:NodeListOf<HTMLElement> = document.querySelectorAll(`.${__pageBtn}`);
                const $programCards:HTMLElement = document.querySelector(`.${__programCards}`);
                const cardsWidth:number = document.querySelector('.programs__program-card').clientWidth;

                if (!target.classList.contains(__pageBtn)) return;

                pageBtns.forEach((pageBtn: HTMLElement, idx) => {
                    if (target === pageBtn) this.num = idx;
                    pageBtn.classList.toggle(`${__pageBtn}--active`, pageBtn === target);
                })

                $programCards.style.transform = `translate(${-(cardsWidth + 16) * this.num}px, 0)`;
                this.checkDisable()
            }
            function HandleMoveBtn(e:MouseEvent): void {
                const __leftBtn:string = 'programs__move-left';
                const __rightBtn:string = 'programs__move-right';
                const __programCards:string = "programs__program-cards";
                const __pageBtn:string = 'programs__page-btn';

                const $programCards:HTMLElement = document.querySelector(`.${__programCards}`);
                const $pageBtns:NodeListOf<HTMLElement> = document.querySelectorAll(`.${__pageBtn}`);
                
                const cardsWidth:number = document.querySelector('.programs__program-card').clientWidth;

                const target = e.target as HTMLElement;

                if (this.num && target.classList.contains(__leftBtn)) this.num--; 
                else if (this.num !==  this.dataLength - 1 && target.classList.contains(__rightBtn)) this.num++ 
                else return;

                $programCards.style.transform = `translate(${-(cardsWidth + 16) * this.num}px, 0)`;
                $pageBtns.forEach((pageBtn) => {
                    pageBtn.classList.toggle(`${__pageBtn}--active`, pageBtn === $pageBtns[this.num])
                })
                this.checkDisable()
            }
            document.querySelector('.programs__move-btn').addEventListener('click', HandleMoveBtn.bind(this));
            document.querySelector('.programs__page-btns').addEventListener('click', HandlePageBtn.bind(this));
            window.addEventListener('resize', this.HandleResize.bind(this));
        }
    }

    new Program(programData);
})