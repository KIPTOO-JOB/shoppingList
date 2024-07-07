const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(e) {
	// Prevent form from default
	e.preventDefault();

	// Add a Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	// Add a li
	const newTodo = document.createElement("li");
	newTodo.textContent = todoInput.value;
	// Add the styling
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	// Check Btn
	const checkedButton = document.createElement("button");
	checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
	// Add the styling
	checkedButton.classList.add("checked-btn");
	todoDiv.appendChild(checkedButton);

	// Delete Btn
	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
	// Add the  styling
	deleteButton.classList.add("delete-btn");
	todoDiv.appendChild(deleteButton);

	// Append to List
	todoList.appendChild(todoDiv);
	// Reseting  the Input field to be  blank
	todoInput.value = "";
}

function deleteCheck(event) {
	const item = event.target;

	// Delete the todo
	if (item.classList.contains("delete-btn")) {
		const todo = item.parentElement;
		todo.remove();
	}

	// Check mark the todo
	if (item.classList.contains("checked-btn")) {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}
