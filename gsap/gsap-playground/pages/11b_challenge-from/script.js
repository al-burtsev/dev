import gsap from "gsap";

const card = document.querySelector('#card');
const side = gsap.utils.selector(card);
const front = side(".card-front");
const back = side(".card-back");

const tl = gsap.timeline({ paused: true })
    .to(front, { duration: 1, rotationY: 180, ease: 'circ.inOut(4)' })
    .to(back, { duration: 1, rotationY: 0, ease: 'circ.inOut(4)' }, 0)

card.addEventListener("mouseenter", () => {
    tl.play();
});
card.addEventListener("mouseleave", () => {
    tl.reverse();
});
