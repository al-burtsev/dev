import gsap from "gsap";

const repeatBtn = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    opacity: 0,
    y: 100,
    scale: .95,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power4.out'
});

repeatBtn.addEventListener('click', () => {   
    animation.restart();
})
