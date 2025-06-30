import "./styles.css";
import { createProject } from "./project";
import { createWindow } from "./ui";
import { showProjectDialog } from "./ui";

const myProject = createProject();

createWindow();
showProjectDialog();
