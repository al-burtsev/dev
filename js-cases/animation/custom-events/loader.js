const loaderElem = document.querySelector('.loader');

loaderElem.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        loaderElem.dispatchEvent(new CustomEvent('loaderClose', {
            bubbles: true,
            detail: {
                closeAnimationName: event.animationName,
                closeAnimationDuration: event.elapsedTime,
            }
        }));
    }
});