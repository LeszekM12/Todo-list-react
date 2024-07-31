import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink} from "./styled";
import { removeTask, selectTasks, toggleTaskDone, selectHideDone } from "../../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "🗸" : ""}
          </Button>
          <StyledLink 
            title="Wejdź w szczegóły zadania"
            to={`/tasks/${task.id}`}
          >
            <Content done={task.done}>
              {task.content}
            </Content>
          </StyledLink>
          <Button remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  )
};


export default TaskList;
