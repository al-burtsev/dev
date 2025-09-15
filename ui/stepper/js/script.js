const stepper = document.querySelector('.stepper');
const stepperInput = document.querySelector('.stepper__input');
const stepperBtnUp = document.querySelector('.stepper__btn--up');
const stepperBtnDown = document.querySelector('.stepper__btn--down');

let count = Number(stepperInput.value);

const isNotIos = () => {
    if (!/iphone|iPad|iPod/i.test(navigator.userAgent)) {
        return false
    }
    return true;
}

stepperInput.addEventListener('input', (e) => {
    const self = e.currentTarget;

    if (self.value === '0') {
        self.value = 1;
    }

    if (isNotIos) {
        self.style.width = `${self.value.length + 1}ex`
    } else {
        self.style.width = `${self.value.length + 2}ex`
    }

    count = Number(stepperInput.value);

    if (count === 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
    }
});

stepperBtnUp.addEventListener('click', (e) => {
    e.preventDefault();

    count += 1;


    if (count === 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
    }

    stepperInput.value = count;

    if (isNotIos) {
        stepperInput.style.width = `${stepperInput.value.length + 1}ex`
    } else {
        stepperInput.style.width = `${stepperInput.value.length + 2}ex`
    }
});

stepperBtnDown.addEventListener('click', (e) => {
    e.preventDefault();

    count -= 1;

    if (count === 1) {
        stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
        stepperBtnDown.classList.remove('stepper__btn--disabled');
    }

    stepperInput.value = count;

    if (isNotIos) {
        stepperInput.style.width = `${stepperInput.value.length + 1}ex`
    } else {
        stepperInput.style.width = `${stepperInput.value.length + 2}ex`
    }
});