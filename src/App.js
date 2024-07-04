import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
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
        <Tasks 
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

export default App;
