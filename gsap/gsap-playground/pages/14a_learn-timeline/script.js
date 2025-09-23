import gsap from 'gsap';

const cardsContainer = document.querySelector('.cards');
const detailImage = document.querySelector('#detailImage');
const detailPage = document.querySelector('#detailPage');
const detailContent = document.querySelector('#detailContent');
const closeBtn = document.querySelector('#closeBtn');


const tl = gsap.timeline({ paused: true });

tl.set(detailPage, {
    display: 'block',
    opacity: 0,
}).to(detailPage, {
    opacity: 1,
    duration: 0.4,
    ease: 'power4.in',
}).to(detailContent, {
    opacity: 1,
    duration: 0.3,
    ease: 'power4.in'
});

const closeBtnTl = gsap.timeline({ paused: true });

closeBtnTl
    .to(closeBtn, {
        scale: 0.85,
        duration: 0.2,
        ease: 'power4.in'
    }).to(closeBtn, {
        scale: 1,
        duration: 0.2,
        ease: 'power4.out'
    });

cardsContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (!card || !cardsContainer.contains(card)) return

    const cardImg = card.querySelector('img');
    detailImage.src = cardImg.src;

    tl.play();
});

closeBtn.addEventListener('click', () => {
    tl.reverse();
    closeBtnTl.restart();
});