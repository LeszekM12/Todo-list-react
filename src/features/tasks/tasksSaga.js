import { call, put, debounce, takeEvery, select } from "redux-saga/effects";
import { axiosExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* axiosExampleTasksHandler() {
   console.log("Zaczynam precę");
 try { 
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
 } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
 }
}

function* saveTasksInLocalStorageHandler() {
   const tasks = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    console.log("Saga jest!");
    yield debounce(200, axiosExampleTasks.type, axiosExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}