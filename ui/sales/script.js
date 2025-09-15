const date = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
};

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
        day: 'numeric',
        month: 'long',
    }

    return date.toLocaleString('ru-RU', options);
}

const createPromotion = (promo, startDate, endDate) => {
    const promoElem = document.createElement('article');
    promoElem.classList.add('promotion');

    const title = document.createElement('h2');
    title.classList.add('promotion__title');
    title.textContent = promo.title;

    const descr = document.createElement('p');
    descr.classList.add('promotion__descr');
    descr.textContent = promo.descr;

    const discount = document.createElement('div');
    discount.classList.add('promotion__discount');
    discount.textContent = `Скидка ${promo.discount}%`;

    const dates = document.createElement('div');
    dates.classList.add('promotion__dates');
    dates.textContent = `${formatDate(startDate)} - ${formatDate(endDate)}`;

    promoElem.append(title, descr, discount, dates);

    return promoElem;
}

const displayPromotions = (promoData, date) => {
    const promoContainer = document.querySelector('.promotions-container');
    const currentDate = new Date(date.year, date.month - 1, date.day);

    promoData.forEach(elem => {
        const startDate = new Date(elem.start_date);
        const endDate = new Date(elem.end_date);

        if (currentDate >= startDate &&
            currentDate <= endDate
        ) {
            const promoElem = createPromotion(elem, startDate, endDate);
            promoContainer.append(promoElem);
        }

    });

};

fetch('promotions.json')
    .then(response => response.json())
    .then(data => displayPromotions(data, date))
    .catch(error => console.log('Ошибка запроса', error));