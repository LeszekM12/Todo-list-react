import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleHideDone,
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
          tasks={tasks} 
          hideDone={hideDone} 
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks} 
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllTaskDone={markAllTaskDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
