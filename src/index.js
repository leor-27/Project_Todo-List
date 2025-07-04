import "./styles.css";
import { createProject } from "./project";
import { createWindow, showProjectDialog } from "./ui";

function init() {
  const myProject = createProject();
  createWindow();
  showProjectDialog();
}

init();
