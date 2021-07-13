interface Names{
    [key: string]: string;
}
export default class About {
    private readonly names: Names;
    constructor() {
        this.names = {
            aboutBtns: `about__btns`,
            aboutBtn: `about__btn`,
            aboutCards: `about__cards`,
            aboutCard: `about__card`,
            aboutImageBox: `about__image-box`,
        }
        this.handleBtnClick();
        this.handleCardClick();
    }
    handleBtnClick():void {
        const $aboutBtns = document.querySelector(`.${this.names.aboutBtns}`);
        $aboutBtns.addEventListener('click', (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.classList.contains(this.names.aboutBtn)) return;
            const idx = target.dataset.btnNumber;
            const $btnElems: NodeListOf<HTMLElement>= document.querySelectorAll(`.${this.names.aboutBtn}`)
            $btnElems.forEach(elem => {
                elem.classList.toggle(`${this.names.aboutBtn}--active`, e.target === elem);
            });
            const $cardElems: NodeListOf<HTMLElement>= document.querySelectorAll(`.${this.names.aboutCard}`);
            $cardElems.forEach((elem:HTMLElement) => {
                elem.classList.toggle(`${this.names.aboutCard}--active`, idx === elem.dataset.cardNumber)
            })
            const $imgBoxElems: NodeListOf<HTMLElement>= document.querySelectorAll(`.${this.names.aboutImageBox}`);
            $imgBoxElems.forEach((elem:HTMLElement) => {
                elem.classList.toggle(`${this.names.aboutImageBox}--active`, idx === elem.dataset.imgNumber)
            })
        })
    }
    handleCardClick() {
        if (window.innerWidth < 991) return;
        const aboutCardArr: NodeListOf<HTMLElement> = document.querySelectorAll(`.${this.names.aboutCard}`);
        const that = this;
        aboutCardArr.forEach((aboutCard:HTMLElement) => {
            aboutCard.addEventListener('click', function (e) {
                const target = e.currentTarget as HTMLElement;
                const idx = target.dataset.cardNumber;
                aboutCardArr.forEach((elem) => {
                    elem.classList.toggle(`${that.names.aboutCard}--active`, elem === this);
                })
                const $imgBoxElems: NodeListOf<HTMLElement>= document.querySelectorAll(`.${that.names.aboutImageBox}`);
                $imgBoxElems.forEach((elem:HTMLElement) => {
                    elem.classList.toggle(`${that.names.aboutImageBox}--active`, idx === elem.dataset.imgNumber)
                })
                
            });
        })
    }
}