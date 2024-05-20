import './styles.css';
import { ToDo } from './modules/todo';
import { Project } from './modules/project';
import { Storage } from './modules/storage';
import { DOM } from './modules/dom';

document.addEventListener('DOMContentLoaded', () => {
  let projects = Storage.loadProjects();
  let currentProjectIndex = 0;

  if (projects.length === 0) {
    projects.push(new Project('Default Project'));
    Storage.saveProjects(projects);
  }

  const renderProjects = () => {
    DOM.renderProjects(projects, switchProject);
  };

  const switchProject = (index) => {
    currentProjectIndex = index;
    DOM.renderTodos(projects[currentProjectIndex]);
  };

  const addProjectButton = document.getElementById('add-project');
  addProjectButton.addEventListener('click', () => {
    const projectTitle = document.getElementById('project-title').value.trim();
    if (projectTitle) {
      projects.push(new Project(projectTitle));
      Storage.saveProjects(projects);
      renderProjects();
      switchProject(projects.length - 1);
      document.getElementById('project-title').value = '';
    }
  });

  const addTodoButton = document.getElementById('add-todo');
  addTodoButton.addEventListener('click', () => {
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-dueDate').value;
    const priority = document.getElementById('todo-priority').value;

    if (title && dueDate) {
      const newTodo = new ToDo(title, description, dueDate, priority);
      projects[currentProjectIndex].addTodo(newTodo);
      Storage.saveProjects(projects);
      DOM.renderTodos(projects[currentProjectIndex]);
    }
  });

  renderProjects();
  switchProject(0);
});