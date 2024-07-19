import { call, put, takeEvery } from "redux-saga/effects";
import { axiosExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* axiosExampleTasksHandler() {
 try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
 } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
 }
}

export function* watchAxiosExampleTasks() {
    console.log("Saga jest!");
    yield takeEvery(axiosExampleTasks.type, axiosExampleTasksHandler );
}