import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TasksState } from "../../../types";

function TaskDetails() {
    const { id } = useParams<{ id: string }>();
    const task = useSelector((state: { tasks: TasksState }) => getTaskById(state, id));

    return (
        <Container>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "Task not found 😥"}
                body={!!task && (
                    <>Completed: <strong>{task.done ? "Yes" : "No"}</strong></>
                )}
            />
        </Container>
    );
}

export default TaskDetails;
