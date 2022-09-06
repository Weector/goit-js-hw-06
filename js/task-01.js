const categoriesEl = document.querySelector("#categories");
console.log("Number of categories:", categoriesEl.childElementCount);

const firstItemEl = document.querySelector(".item");
const firstTitleEl = firstItemEl.firstElementChild.textContent;
const firstCountEl = firstItemEl.lastElementChild.childElementCount;
console.log("Category:", firstTitleEl);
console.log("Elements:", firstCountEl);

const secondItemEl = firstItemEl.nextElementSibling;
const secondTitleEl = secondItemEl.firstElementChild.textContent;
const secondCountEl = secondItemEl.lastElementChild.childElementCount;
console.log("Category:", secondTitleEl);
console.log("Elements:", secondCountEl);

const thirdItemEl = secondItemEl.nextElementSibling;
const thirdTitleEl = thirdItemEl.firstElementChild.textContent;
const thirdCountEl = thirdItemEl.lastElementChild.childElementCount;
console.log("Category:", thirdTitleEl);
console.log("Elements:", thirdCountEl);
