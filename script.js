const addTaskButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    // Add a new task to the list
    const task = taskInput.value;
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `
      ${task}
      <button class="delete-button">Delete</button>
      <button class="complete-button">Complete</button>
    `;
        taskList.appendChild(li);
        taskInput.value = '';

        // Add event listeners for the delete and complete buttons
        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        const completeButton = li.querySelector('.complete-button');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
});