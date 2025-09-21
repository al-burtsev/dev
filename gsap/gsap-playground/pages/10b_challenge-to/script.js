import gsap from "gsap";

const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });

const inOptions = {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out',
};

const blinkOptions = {
    scale: 1.1,
    repeat: 1,
    yoyo: true,
    duration: 0.2,
    ease: 'back.out(2)',
};

const outOptions = {
    y: 100,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    delay: 2.5,
    ease: 'power.in'
};

tl
    .to('.toast.one', inOptions)
    .to('.toast.one', blinkOptions)
    .to('.toast.one', outOptions)
    .to('.toast.two', inOptions)
    .to('.toast.two', blinkOptions)
    .to('.toast.two', outOptions)