import React, { useEffect, useState } from "react";
import { defaultTasks } from "./Tasks";

export const useTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    localStorageTasks ? JSON.parse(localStorageTasks) : defaultTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
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

  return { 
    tasks,
    removeTask,
    toggleTaskDone,
    addNewTask,
    markAllTaskDone,
  };
};