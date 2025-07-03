import "./logic/styles.css";
import { createProject } from "./logic/project";
import { createWindow, showProjectDialog } from "./ui";

function init() {
  const myProject = createProject();
  createWindow();
  showProjectDialog();
}

init();
