const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav.querySelectorAll('a');

nav.style.setProperty('--header-height', `${headerHeight}px`);
nav?.classList.toggle("transition");

burger?.addEventListener('click', () => {
    body.classList.toggle('no-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        body.classList.remove('no-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--visible');
    });
});