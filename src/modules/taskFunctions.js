const updateTask = (liElement, todoList) => {
  const taskDesc = liElement.querySelector('.task-description').value;
  const chkState = liElement.querySelector('.completed-checkbox').checked;
  const taskIndex = liElement.value - 1;
  todoList[taskIndex].description = taskDesc;
  todoList[taskIndex].completed = chkState;
  localStorage.setItem('todo-list', JSON.stringify(todoList));
};

export default updateTask;