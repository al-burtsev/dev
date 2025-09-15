const root = document.querySelector(':root');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const burgerWrap = document.querySelector('.burger-wrap');
const burger = document.querySelector('#burger-checkbox');
const menu = document.querySelector('.header-menu');

menu.style.setProperty('--header-height', `${headerHeight}px`);
menu?.classList.toggle("transition");

burger.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    menu.classList.toggle('header-menu--visible');
    burgerWrap.classList.toggle('burger--clicked');
});