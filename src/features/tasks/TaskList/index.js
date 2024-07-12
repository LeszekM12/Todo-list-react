import { List, Item, Content, Button } from "./styled";

export const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zakończyć tydzień", done: false },
];

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "🗸" : ""}
        </Button>
          <Content done={task.done}>
            {task.content}
          </Content>
        <Button remove
          onClick={() => removeTask(task.id)}
        >
          🗑️
        </Button>
      </Item>
    ))}
    <li className="tasks__item"></li>
  </List>
);


export default TaskList;
