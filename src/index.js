
document.addEventListener('DOMContentLoaded', () => {
    let tasks = [
      { id: 1, title: 'Grocery shopping', priority: 'high' },
      { id: 2, title: 'Complete assignments', priority: 'medium' },
      { id: 3, title: 'Update Journal', priority: 'low' }
    ];
  
    function suppressDefaultAction() {
      const form = document.getElementById('create-task-form');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const newTaskInput = document.getElementById('new-task-description');
        const newTaskTitle = newTaskInput.value.trim();
  
        const newTask = {
          id: tasks.length + 1,
          title: newTaskTitle,
          priority: 'low' 
        };
  
        tasks.push(newTask);
  
        newTaskInput.value = '';
  
        renderTasks();
      });
    }
    suppressDefaultAction();
  
    function deleteTask(taskId) {
      tasks = tasks.filter(task => task.id !== taskId);
  
      renderTasks();
    }
  
    function renderTasks() {
      const tasksList = document.getElementById('tasks');
  
      tasksList.innerHTML = '';
  
      tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.title;
        listItem.setAttribute('data-task-id', task.id);
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '  X';
        deleteButton.addEventListener('click', () => {
          const taskId = parseInt(listItem.getAttribute('data-task-id'));
          deleteTask(taskId);
        });
  
        listItem.appendChild(deleteButton);
        tasksList.appendChild(listItem);
      });
    }
    renderTasks();
  });