let counterValue = 0;

const decrement = document.querySelector("[data-action=decrement]");
const increment = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

decrement.addEventListener("click", () => handleBtnClick("decrement"));
increment.addEventListener("click", () => handleBtnClick("increment"));

function handleBtnClick(action) {
  if (action === "decrement") {
    counterValue -= 1;
    value.textContent = counterValue;
    return;
  }
  counterValue += 1;
  value.textContent = counterValue;
  return;
}
