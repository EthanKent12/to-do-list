document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
        <span class="task-name">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
        taskList.appendChild(li);
        
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(){
            li.remove();
        });
    }
});