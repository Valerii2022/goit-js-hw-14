const categoriesList = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesList);

categoriesList.forEach((item) => {
  console.log("Category:", item.firstChild.nextElementSibling.innerText);
  console.log("Elements:", item.children[1].children.length);
});
