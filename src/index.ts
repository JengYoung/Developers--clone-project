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
})