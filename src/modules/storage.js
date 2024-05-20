export const Storage = (() =>{
    const saveProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };
    const loadProjects = () => {
        const projects = JSON.parse(localStorage.getItem('projects'));
        return projects ? projects : [];
    }
    return {
        saveProjects, 
        loadProjects
    };

})()