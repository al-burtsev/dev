function countdownTimer(container, countdownTime = 600, separator = ' : ') {

    if (countdownTime > 86400) {
        countdownTime = 86400;
    };

    const timerDisplay = document.querySelector(container);
    const hourElem = document.createElement('span');
    const minElem = document.createElement('span');
    const secElem = document.createElement('span');

    // Инициализируем часы, минуты и секунды
    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    // Устанавливаем начальные значения

    hourElem.textContent = String(hours).padStart(2, '0');
    minElem.textContent = String(minutes).padStart(2, '0');
    secElem.textContent = String(seconds).padStart(2, '0');

    // Функция для обновления таймера
    function updateTimer() {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            return;
        }

        if (seconds === 0) {
            if (minutes === 0) {
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }

        // Обновляем отображение

        hourElem.textContent = String(hours).padStart(2, '0');
        minElem.textContent = String(minutes).padStart(2, '0');
        secElem.textContent = String(seconds).padStart(2, '0');
    }

    timerDisplay.append(minElem, separator, secElem)

    if (countdownTime >= 3600) {
        timerDisplay.innerHTML = '';
        timerDisplay.append(hourElem, separator, minElem, separator, secElem);
    }

    // Запускаем таймер
    const intervalId = setInterval(updateTimer, 1000);
}

countdownTimer('.timer', 1200);
countdownTimer('.new-timer', 10);
