import {ToDo} from './modules/todo';
import {Project} from './modules/project';
import {Storage} from './modules/storage';
import {DOM} from './modules/dom';

document.addEventListener('DOMContentLoaded', () => {
    let projects = Storage.loadProjects();
    if (projects.length === 0) {
        projects.push(new Project('Default Project'));
    }

    DOM.renderProjects(projects);

    const addTodoButton = document.getElementById('add-todo');
    addTodoButton.addEventListener('click', () => {
        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-description').value;
        const dueDate = document.getElementById('todo-dueDate').value;
        const priority = document.getElementById('todo-priority').value;

        const newTodo = new ToDo(title, description, dueDate, priority);
        projects[0].addTodo(newTodo); // adds todo to default project

        Storage.saveProjects(projects);
        DOM.renderTodos(projects[0]);
    });
});
