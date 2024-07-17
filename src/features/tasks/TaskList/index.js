import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { removeTask, selectTasks, toggleTaskDone } from "../tasksSlice";

export const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zakończyć tydzień", done: false },
];

const TaskList = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "🗸" : ""}
          </Button>
            <Content done={task.done}>
              {task.content}
            </Content>
          <Button remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </Button>
        </Item>
      ))}
      <li className="tasks__item"></li>
    </List>
  )
};


export default TaskList;
