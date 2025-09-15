document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const titleSplit = new SplitText('.title', { type: 'chars' });
    const titleChars = titleSplit.chars;

    titleChars.reverse().forEach((char, index) => {
        gsap.from(char, {
            xPercent: -150 * (titleChars.length - index),
            ease: 'back.inOut',
            duration: 1,
            delay: index * 0.1,
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.title',
                start: 'top 80%',
                markers: true,
            }
        });
    });
});