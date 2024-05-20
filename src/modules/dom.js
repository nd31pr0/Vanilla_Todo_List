import {storage} from './storage';
import {ToDo} from './todo';
import {Project} from './project';

const DOM = (()=> {
    const projectContainer = document.getElementById('project-container'); 
    const todoContainer = document.getElementById('todo-container');

    const renderProjects = (projects) => {
        projectContainer.innerHTML = '';
        projects.forEach(project =>{
            const projectDiv = document.createElement('div');
            projectDiv.textContent = project.name;
            projectDiv.addEventListener('click', () => renderTodos(project));
            projectContainer.appendChild(projectDiv);
        });
    };

    const renderTodos = (project) => {
        todoContainer.innerHTML = '';
        project.todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.textContent = `${todo.title} - ${todo.dueDate}`;
            todoDiv.addEventListener('click', () => {
                // Expand the todo items to display full content
            });
            todoContainer.appendChild(todoDiv);
        });
    };
    return {
        renderProjects,
        renderTodos
    };
})();
export {DOM};