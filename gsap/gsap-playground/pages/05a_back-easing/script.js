import gsap from "gsap";

const tabRow = document.querySelector('.tab-row');
const startActiveTab = document.querySelector('.tab.active');
const indicator = document.querySelector('.indicator');

const updateIndicator = (target, wrapper) => {
    const tabBounds = target.getBoundingClientRect();
    const wrapperBounds = wrapper.getBoundingClientRect();

    const width = tabBounds.width;
    const offset = tabBounds.left - wrapperBounds.left;

    gsap.to(indicator, {
        x: offset,
        width,
        duration: 0.4,
        ease: 'back.out(1.7)',
    })
}

tabRow.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');

    if (!tab || !tabRow.contains(tab)) {
        return
    };

    const currentActive = tabRow.querySelector('.tab.active');

    if (currentActive) {
        currentActive.classList.remove('active');
    }

    tab.classList.add('active');
    updateIndicator(tab, tabRow);
});

updateIndicator(startActiveTab, tabRow);
