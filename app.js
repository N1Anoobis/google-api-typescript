var buttonEl = document.querySelector("button");
var inputEl = document.querySelector("input");
var listEl = document.querySelector("ul");
function addGoal() {
    var enteredValue = inputEl.value;
    var listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = "";
}
buttonEl.addEventListener("click", addGoal);
