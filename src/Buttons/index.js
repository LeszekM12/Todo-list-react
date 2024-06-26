import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllTaskDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="task__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          onClick={markAllTaskDone}
          className="task__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
