// 1. Users typing in should enable the Add button
// 2. Clicking Add button - adds a todo
// 3. delete button for each todo item

const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

input.addEventListener("input", onTypeTodo);

function onTypeTodo() {
  addButton.disabled = input.value.length === 0;
}

addButton.addEventListener("click", onClickAdd);

function onClickAdd() {
  const li = createListItem(input.value);
  todoList.appendChild(li);
  input.value = "";
  addButton.disabled = true;
}

function createListItem(todoName) {
  const li = document.createElement("li");

  const heading = document.createElement("h2");
  heading.textContent = todoName;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", onClickDelete);

  li.appendChild(heading);
  li.appendChild(deleteButton);

  return li;
}

function onClickDelete() {
  this.parentNode.remove();
}
