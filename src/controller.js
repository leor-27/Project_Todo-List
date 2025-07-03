import { format } from "date-fns";
import { createTodo } from "./logic/todo";
import { ProjectManager } from "./logic/project";
import { PROJECTS } from "./logic/project";

export function handleNewTodo({
  title,
  description,
  dueDate,
  priority,
  projectName,
}) {
  const formattedDate = format(new Date(dueDate), "PPp");
  const todo = createTodo(title, description, formattedDate, priority, false);
  const project = getAllProject().find((p) => p.getName() === projectName);
  if (project) project.addTodo(todo);
  return todo;
}
