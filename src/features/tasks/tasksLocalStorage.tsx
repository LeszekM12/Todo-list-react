import {Task} from "../../types";
const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task[]): void =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Task[] =>
    JSON.parse(localStorage.getItem(localStorageKey)!) || [];