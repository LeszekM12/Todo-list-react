import { call, put, debounce, takeEvery, select } from "redux-saga/effects";
import { axiosExampleTasks, selectTasks, axiosExampleTasksSuccess, axiosExampleTasksError, } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { Task} from "../../types";

function* axiosExampleTasksHandler() {
 try { 
    const exampleTasks: Task[] = yield call(getExampleTasks);
    yield put(axiosExampleTasksSuccess(exampleTasks));
 } catch (error) {
   yield put(axiosExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
 }
}

function* saveTasksInLocalStorageHandler() {
   const tasks: Task[] = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield debounce(600, axiosExampleTasks.type, axiosExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}