const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", getAmount);
btnDestroy.addEventListener("click", destroyBoxes);

// ////////

function getAmount() {
  const amount = Number(input.value);
  if (amount > input.max || amount < input.min) {
    alert("Помилка! Доступне значення від 1 до 100");
  } else {
    createBoxes(amount);
  }
}
// //////////
let divElSize = 30;
function createBoxes(amount) {
  const array = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = divElSize + "px";
    divEl.style.height = divElSize + "px";
    divElSize += 10;

    array.push(divEl);
  }
  boxes.append(...array);
}

// ///////

function destroyBoxes() {
  divElSize = 30;
  boxes.innerHTML = "";
}

// /////

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
