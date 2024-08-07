import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        }, 
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
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
        axiosExampleTasksSucces: (state, { payload: tasks }) => {
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
    axiosExampleTasksSucces,
    axiosExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) => 
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === ""){
        return tasks;
    }

    return tasks.filter(({ content }) =>
         content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;