import Form from "../Form";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import Search from "../Search";
import AxiosExampleTasksButton from "../AxiosExampleTasksButton";

function TasksPage() {
    return (
        <Container>
            <Header title="Task List" />
            <Section title="Add new task" body={<Form />} extraHeaderContent={<AxiosExampleTasksButton />} />
            <Section title="Search" body={<Search />} />
            <Section title="Tasks" body={<TaskList />} extraHeaderContent={<Buttons />} />
        </Container>
    );
}

export default TasksPage;
