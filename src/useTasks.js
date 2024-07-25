import { useEffect, useState } from "react";
import { defaultTasks } from "./features/tasks/TaskList";

export const useTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");

    const [tasks, setTasks] = useState(
    localStorageTasks ? JSON.parse(localStorageTasks) : defaultTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
};