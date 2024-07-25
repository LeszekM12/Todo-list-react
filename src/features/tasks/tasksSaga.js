import { call, put, debounce, delay } from "redux-saga/effects";
import { axiosExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* axiosExampleTasksHandler() {
   console.log("Zaczynam precę");
 try {
    yield delay(500); 
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
 } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
 }
}

export function* watchAxiosExampleTasks() {
    console.log("Saga jest!");
    yield debounce(1000, axiosExampleTasks.type, axiosExampleTasksHandler);
}