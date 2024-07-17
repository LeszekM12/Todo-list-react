import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
            const index = tasks.findIndex(tasks => tasks.id !== payload)
            tasks.splice(index, 1)
        },
        setAllTaskDone: ({ tasks } ) => {
            tasks.map(task => (
                task.done = true
            ))
        },
    },
});

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllTaskDone 
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;