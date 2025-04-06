const sectionElems = document.querySelectorAll('section');

const animateSections = () => {
    sectionElems.forEach((sectionElem) => {
        sectionElem.classList.add('is-visible');
    });
};

document.addEventListener('loaderClose', (event) => {
    console.log(event);
    animateSections();
})