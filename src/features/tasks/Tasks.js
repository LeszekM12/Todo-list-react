import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks)

  const {
    removeTask,
    toggleTaskDone,
    addNewTask,
    markAllTaskDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" 
        body={
        <Form 
        addNewTask={addNewTask} />} 
        />
      <Section
        title="Lista zadań"
        body={
        <TaskList 
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            markAllTaskDone={markAllTaskDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
