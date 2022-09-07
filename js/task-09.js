const buttonEL = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonEL.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const bgColor = getRandomHexColor();
  spanColor.textContent = bgColor;
  document.body.style.backgroundColor = bgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
