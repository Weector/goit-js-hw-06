const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map((ingredient) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  itemsEl.textContent = ingredient;
  return itemsEl;
});

listEl.append(...ingredientsEl);
