document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const titleSplit = new SplitText('.title', { type: 'chars' });
    const titleChars = titleSplit.chars;

    gsap.from(titleChars, {
        yPercent: 130,
        ease: 'back.out',
        duration: 1,
        stagger: 0.02,
        scrollTrigger: {
            trigger: '.title',
            start: 'top 80%',
            markers: true,
        }
    });


});