const categoriesListRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesListRef.length);

categoriesListRef.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
