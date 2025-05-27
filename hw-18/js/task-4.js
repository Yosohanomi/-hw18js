let counterValue = 0;

const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function updateValue() {
    valueSpan.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    updateValue();
}

function decrement() {
    counterValue -= 1;
    updateValue();
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);