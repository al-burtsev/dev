function calculate(expression) {
  expression = expression.replace(/÷/g, '/').replace(/x/g, '*');
  const result = math.evaluate(expression);
  return result;
}

const state = {
  expString: '',
  resultString: 0,
  sum: 0,
};

const expressionEl = document.querySelector('.calc__expression');
const resultEl = document.querySelector('.calc__result');
resultEl.innerHTML = state.resultString;

const calcBtns = document.querySelectorAll('.calc__btn');

calcBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.dataset.btn === 'clear') {
      state.expString = '';
      state.sum = 0;
      expressionEl.innerHTML = state.expString;
      resultEl.innerHTML = state.resultString;
    }

    if (btn.dataset.btn === 'num') {
      const numValue = parseInt(e.currentTarget.textContent, 10);

      console.log(numValue);

      state.expString += numValue;
      expressionEl.innerHTML = state.expString;
      resultEl.innerHTML = `= ${calculate(state.expString)}`;
    }

    if (btn.dataset.btn === 'operation') {
      console.log(state.expString);

      const operator = e.currentTarget.textContent;

      state.expString += operator;
      expressionEl.innerHTML = state.expString;
      resultEl.innerHTML = `= ${calculate(state.expString)}`;
    }
  });
});

// 11
