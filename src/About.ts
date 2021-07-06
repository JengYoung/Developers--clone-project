interface Names{
    [key: string]: string;
}
export default class About {
    private readonly names: Names;
    constructor() {
        this.names = {
            aboutBtns: `about__btns`,
            aboutBtn: `about__btn`,
            aboutCard: `about__card`,
            aboutImageBox: `about__image-box`,
        }
        this.handleBtnClick();
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
}