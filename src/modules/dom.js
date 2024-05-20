import { Storage } from './storage';
import { ToDo } from './todo';
import { Project } from './project';

const DOM = (() => {
  const projectContainer = document.getElementById('project-container');
  const todoContainer = document.getElementById('todo-container');

  const renderProjects = (projects, switchProjectCallback) => {
    projectContainer.innerHTML = '';
    projects.forEach((project, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.textContent = project.name;
      projectDiv.classList.add('project-item');
      projectDiv.addEventListener('click', () => switchProjectCallback(index));
      projectContainer.appendChild(projectDiv);
    });
  };

  const renderTodos = (project) => {
    todoContainer.innerHTML = '';
    project.todos.forEach(todo => {
      const todoDiv = document.createElement('div');
      todoDiv.textContent = `${todo.title} - ${todo.dueDate}`;
      todoDiv.classList.add('todo-item');
      todoDiv.addEventListener('click', () => {
        // expand todo to see/edit details
      });
      todoContainer.appendChild(todoDiv);
    });
  };

  return {
    renderProjects,
    renderTodos
  };
})();

export { DOM };