import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink} from "./styled";
import { removeTask, toggleTaskDone, selectHideDone, selectTasksByQuery, } from "../../tasksSlice";
import { toTask } from "../../../../core/routes";
import { useQueryParameter } from "../../../../queryParameters";
import { EmptyTasksList } from "./EmptyTasksList";
import { searchQueryParamName} from "../../../searchQueryParamName";
import { TasksState} from "../../../../types";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state: { tasks: TasksState }) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  if(tasks.length === 0) {
    return <EmptyTasksList />
  }

  return (
    <List>
      {tasks.map((task: any) => (
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
