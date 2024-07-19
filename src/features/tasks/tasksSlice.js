import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            { id: 1, content: "przejść na Reacta", done: true },
            { id: 2, content: "zakończyć tydzień", done: false },
        ],
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
        axiosExampleTasks: () => {},
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
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
    setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;