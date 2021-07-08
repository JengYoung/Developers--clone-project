interface optionFormat {
    root: any,
    rootMargin: string,
    threshold: number
}
interface Names {
    [name: string]: string
}
export default class Footer {
    private readonly names: Names;
    constructor() {
        this.names = {
            dropdownBtn: 'footer__dropdown-btn',
            familySites: 'footer__family-sites'
        }
        this.HandleEvent()
    }    
    HandleEvent() {
        const $dropdownBtn:HTMLElement = document.querySelector(`.${this.names.dropdownBtn}`);
        const $familySites:HTMLElement = document.querySelector(`.${this.names.familySites}`);
        let options:optionFormat = {
            root: null, // default: null (viewport)
            rootMargin: '0px',
            threshold: 1,
        }
        let callback = (entries: any, observer: any) => {
            entries.forEach((entry: any) => {
                $familySites.classList.toggle('show-top', !entry.isIntersecting)
            });
        };
        let observer = new IntersectionObserver(callback, options);
        let target = $dropdownBtn;
        observer.observe(target);
        
        $dropdownBtn.addEventListener('click', (e) => {
            $dropdownBtn.classList.toggle(`${this.names.dropdownBtn}--active`);
            $familySites.classList.toggle(`${this.names.familySites}--active`);
        }) 
    }
}