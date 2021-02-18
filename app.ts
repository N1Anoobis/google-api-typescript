const buttonEl = document.querySelector("button") as HTMLButtonElement;
const inputEl = document.querySelector("input") as HTMLInputElement;
const listEl = document.querySelector("ul") as HTMLElement;

function addGoal(): void {
  const enteredValue: string = inputEl.value;
  const listItemEl: Node = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
