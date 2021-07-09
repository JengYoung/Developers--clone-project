import programData from "./datas/program-data.json";
import jobData from "./datas/job-data.json";
import skillsData from "./datas/skills-data.json";
import partnersData from "./datas/partners-data.json";
import contentsData from "./datas/contents-data.json";
import Program from './Program';
import Job from './Job';
import About from './About';
import Partners from './Partners';
import Footer from './Footer';
import Content from './contents';

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

    new Program(programData);
    new Job(jobData, skillsData);
    new Content(contentsData, "contents");
    new About();
    new Partners(partnersData);
    new Footer();
})