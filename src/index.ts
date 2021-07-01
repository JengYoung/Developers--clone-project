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
        // 받아들여온 데이터는 수정 불가하도록 readonly로 작성
        constructor(private readonly datas: Array<DataFormat>) {
            this.renderCard()
            this.renderPageBtn()
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
            data.language.forEach((each: string) => {
                const $languageItem:HTMLElement = document.createElement('li');
                $languageItem.textContent = each;
                $languageItem.className = "programs__language-item"
                $programLanguage.appendChild($languageItem);
            })
            
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

        public renderPageBtn() {
            const $pageBtns:HTMLElement = document.querySelector('.programs__page-btns');
            console.log($pageBtns)
            for (let i:number = 0; i < this.datas.length; i++) {
                const $pageBtn:HTMLElement = document.createElement('li');
                $pageBtn.className = 'programs__page-btn'
                $pageBtns.appendChild($pageBtn);
            };
        };

        public renderCard() {

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
    }

    new Program(programData);
})