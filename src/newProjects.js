import { Project } from './project.js';

function createNewProject(name) {
    const project = new Project(name);
    return project;

}
function addProjectToList(project, projectList) {
    projectList.push(project);

}


export { createNewProject, addProjectToList };