window.addEventListener('DOMContentLoaded', () => {
    function openBar(e: Event): void {
        const $navBar: HTMLElement = document.querySelector('.nav__navbar');
        $navBar.classList.toggle('active');
    }
    document.querySelector('.nav__btn').addEventListener('click', openBar)
})