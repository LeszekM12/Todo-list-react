import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink} from "./styled";
import { removeTask, toggleTaskDone, selectHideDone, selectTasksByQuery, } from "../../tasksSlice";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../../../../queryParameters";
import { EmptyTasksList } from "./EmptyTasksList";

const TaskList = () => {
  const query = useQueryParameter("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  if(tasks.lenght !== tasks) {
    return <EmptyTasksList />
  } 

  return ( 
    <List> 
      {tasks.map (task => (
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
            to={toTask({ id: task.id })}
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
