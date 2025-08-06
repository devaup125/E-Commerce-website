const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }
  
  const li = document.createElement('li');
  li.textContent = task;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

 
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = '';
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});