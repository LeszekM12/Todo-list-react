import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import { defaultTasks } from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  
  const [hideDone, setHideDone] = useState(false);

  const localStorageTasks = localStorage.getItem("Tasks");
  
  const [tasks, setTasks] = useState(defaultTasks,
    localStorageTasks ? JSON.parse(localStorageTasks) : []
  );

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const markAllTaskDone = () => {
    setTasks(tasks => tasks.map(task => (
        {...task, done: true }
    )));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks, 
      { 
        content: newTaskContent, 
        done: false, 
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

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
