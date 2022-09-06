const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementCallback = () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
};

decrementBtn.addEventListener("click", decrementCallback);

const incrementCallback = () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
};

incrementBtn.addEventListener("click", incrementCallback);
