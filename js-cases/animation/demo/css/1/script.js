stripe.onclick = function () {
    stripe.classList.add('animate');
};

boat.onclick = function () {
    //...
    let times = 1;

    function go() {
        if (times % 2) {
            // плыть вправо
            boat.classList.remove('back');
            boat.style.marginLeft = 100 * times + 200 + 'px';
        } else {
            // плыть влево
            boat.classList.add('back');
            boat.style.marginLeft = 100 * times - 200 + 'px';
        }

    }

    go();

    boat.addEventListener('transitionend', function (event) {
        times++;
        go();
        console.log(event.propertyName)
        console.log(event.elapsedTime)
    });
};
