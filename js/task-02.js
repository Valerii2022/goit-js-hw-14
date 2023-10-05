const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients
  .map((element) => `<li class="item">${element}</li>`)
  .join("");

ingredientsList.insertAdjacentHTML("beforeend", items);
