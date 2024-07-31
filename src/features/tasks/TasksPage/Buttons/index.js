import { selectTasks, setAllTaskDone, toggleHideDone, selectHideDone, selectIsEveryTaskDone, axiosExampleTasks } from "../../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button onClick={() => dispatch(axiosExampleTasks())}>
        Pobierz przykładowe zadania 
      </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllTaskDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;
