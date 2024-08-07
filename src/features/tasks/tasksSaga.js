import { call, put, debounce, takeEvery, select } from "redux-saga/effects";
import { axiosExampleTasks, selectTasks, axiosExampleTasksSucces, axiosExampleTasksError, } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* axiosExampleTasksHandler() {
 try { 
    const exampleTasks = yield call(getExampleTasks);
    yield put(axiosExampleTasksSucces(exampleTasks));
 } catch (error) {
   yield put(axiosExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
 }
}

function* saveTasksInLocalStorageHandler() {
   const tasks = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield debounce(600, axiosExampleTasks.type, axiosExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}