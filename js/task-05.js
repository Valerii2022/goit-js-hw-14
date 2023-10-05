const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", handleNameInput);

function handleNameInput(e) {
  nameOutputRef.textContent = e.target.value.trim();
  if (e.target.value.trim() === "") {
    nameOutputRef.textContent = "Anonymous";
  }
}
