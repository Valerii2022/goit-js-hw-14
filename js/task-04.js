let counterValue = 0;

const decrementRef = document.querySelector("[data-action=decrement]");
const incrementRef = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");

decrementRef.addEventListener("click", handleDecrementBtnClick);
incrementRef.addEventListener("click", handleIncrementBtnClick);

function handleDecrementBtnClick() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function handleIncrementBtnClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
