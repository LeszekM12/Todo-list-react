import { all } from "redux-saga/effects";
import { watchAxiosExampleTasks } from "./features/tasks/tasksSaga";


export default function* rootSaga() {
    yield all([
        watchAxiosExampleTasks(),
    ]);
}