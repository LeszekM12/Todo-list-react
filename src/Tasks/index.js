import "./style.css";
import { List } from "./styled";

export const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zakończyć tydzień", done: false },
];

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item${
          task.done && hideDone ? " tasks__item--hidden" : ""
        }`}
      >
        <button
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "🗸" : ""}
        </button>
        <span
          className={`tasks__content ${
          task.done ? "tasks__content--done" : ""}`
          }
        >
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑️
        </button>
      </li>
    ))}
    <li className="tasks__item"></li>
  </List>
);


export default Tasks;
