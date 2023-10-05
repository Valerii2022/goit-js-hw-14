const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleNameInput);

function handleNameInput(e) {
  nameOutput.textContent = e.target.value.trim();
  if (e.target.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
}
