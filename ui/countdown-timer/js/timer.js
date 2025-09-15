document.addEventListener('DOMContentLoaded', () => {
    const declOfNum = (number, titles) => {
        const cases = [2, 0, 1, 1, 1, 2];
        const index = (number % 100 > 4 && number % 100 < 20)
            ? 2
            : cases[(number % 10 < 5) ? number % 10 : 5];
        return `${titles[index]}`;
    }

    const endDate = new Date('Sep 1 2025 00:00:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    const countDown = () => {
        const now = new Date();
        const restOfTime = endDate - now;

        const days = Math.floor(restOfTime / 1000 / 60 / 60 / 24);
        const hours = Math.floor(restOfTime / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(restOfTime / 1000 / 60) % 60;
        const seconds = Math.floor(restOfTime / 1000) % 60;

        daysVal.textContent = String(days).padStart(2, '0');
        hoursVal.textContent = String(hours).padStart(2, '0');
        minutesVal.textContent = String(minutes).padStart(2, '0');
        secondsVal.textContent = String(seconds).padStart(2, '0');

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };

    countDown();
    setInterval(countDown, 1000)
});