
document.querySelector(".todo_form").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission and page refresh.
  
    const todoInput = document.querySelector(".todo_input");
    const newTask = todoInput.value.trim(); // Gets input value and trims whitespace.
  
    if (newTask !== '') {
      const todoList = document.querySelector(".todo_list");
      const listItem = document.createElement('li'); // Corrected to 'li'
      listItem.textContent = newTask; // Sets the text content of the new list item.
  
      const deleteButton = document.createElement('button'); // Corrected to 'button'
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button'; // Assigns a class for styling.
      deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem); // Removes the task on button click.
      });
  
      listItem.appendChild(deleteButton); // Adds the delete button to the list item.
      todoList.appendChild(listItem); // Adds the new task to the list.
    }
  
    todoInput.value = ''; // Clears the input field.
  });
  
