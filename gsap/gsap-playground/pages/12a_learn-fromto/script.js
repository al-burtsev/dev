import gsap from "gsap";

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.4,
    }, {
        scaleY: 1.6,
        duration: 0.6,
        delay: 0.1 * index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut(2)'
    }, 0)
})
