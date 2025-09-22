import gsap from 'gsap';

const buttons = document.querySelectorAll('.reactions button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const emoji = button.dataset.emoji
        const bubble = document.createElement('span');

        bubble.textContent = emoji;
        bubble.classList.add('bubble');

        button.append(bubble);

        gsap.fromTo(button, {
            y: 20,
        }, {
            y: 0,
            ease: 'power2.out',
            duration: 0.2,
        })

        gsap.fromTo(bubble, {
            top: 0,
            left: 0,
            opacity: 0.9,
            userSelect: 'none',
            scale: 0.8,
        }, {
            y: -100,
            scale: 1.6,
            ease: 'circ.out',
            duration: 1.5,
            rotation: 360,
            opacity: 0,
            onComplete: () => {
                bubble.remove()
            }
        })
    })
})