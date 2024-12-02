import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';
import {Task, TasksState} from "../../types";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    } as TasksState,
    reducers: {
        addTask: ({ tasks }, { payload: task }: PayloadAction<Task> ) => {
            tasks.push(task);
        }, 
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, {payload}: PayloadAction<Task["id"]>) => {
            const index = state.tasks.findIndex(task => task.id === payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }: PayloadAction<Task["id"]>) => {
            const index = tasks.findIndex(tasks => tasks.id === payload)
            tasks.splice(index, 1)
        },
        setAllTaskDone: ({ tasks } ) => {
            for (const task of tasks) {
                task.done = true;
            }    
        },
        axiosExampleTasks: state => {
            state.loading = true;
        },
        axiosExampleTasksSuccess: (state, { payload: tasks }: PayloadAction<Task[]>) => {
            state.tasks = tasks;
            state.loading = false;
        },
        axiosExampleTasksError: state => {
            state.loading = false;
        },
    },
});

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllTaskDone,
    axiosExampleTasks, 
    axiosExampleTasksSuccess,
    axiosExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state: {tasks: TasksState }) => state.tasks;

export const selectTasks = (state: {tasks: TasksState }) => selectTasksState(state).tasks;
export const selectHideDone = (state: {tasks: TasksState }) => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = (state: {tasks: TasksState }) => selectTasks(state).every(({ done }) => done);
export const selectLoading = (state: {tasks: TasksState }) => selectTasksState(state).loading;

export const getTaskById = (state: {tasks: TasksState }, taskId: number | string) =>
    selectTasks(state).find(({ id }: Task) => id === taskId);

export const selectTasksByQuery = (state: {tasks: TasksState}, query: string | null) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === ""){
        return tasks;
    }

    return tasks.filter(({ content }) =>
         content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;