export default class Partners {
    constructor(private readonly datas: Array<string>) {
        this.renderPartnerComponent();
    }
    renderPartnerComponent() {
        const $partnersContainer: HTMLElement = document.querySelector('.partners__container');
        this.datas.map(data => {
            const $partner: HTMLElement = document.createElement('li');
            $partner.className = 'partners__partner'
            const $partnerlogo: HTMLElement = document.createElement('img');
            $partnerlogo.className = 'partners__logo'
            $partnerlogo.setAttribute('src', data);
            $partnerlogo.setAttribute('alt', "채용 프로그램 이미지");

            $partner.appendChild($partnerlogo);
            $partnersContainer.appendChild($partner);
        })
    }
}