import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink} from "./styled";
import { removeTask, toggleTaskDone, selectHideDone, selectTasksByQuery, } from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toTasks } from "../../../../routes";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            to={toTasks({ id: task.id })}
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
