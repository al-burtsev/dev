
const state = {
    expString: '',
    resultString: 0,
    sum: 0,
}

const expressionEl = document.querySelector('.calc__result');
const resultEl = document.querySelector('.calc__result');
resultEl.innerHTML = state.resultString;

const calcBtns = document.querySelectorAll('.calc__btn');
const numBtns = document.querySelectorAll('[data-btn="num"]');

calcBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (btn.dataset.btn === 'num') {
            const numValue = parseInt(e.currentTarget.textContent, 10);

            console.log(numValue)

            state.expString += numValue;
            resultEl.innerHTML = state.expString;
        }

        if (btn.dataset.btn === 'operation') {
            console.log(e.currentTarget.textContent)

            const operator = e.currentTarget.textContent;

            state.expString += operator;
            expressionEl.innerHTML = state.expString;
        }

    })
})

// 11