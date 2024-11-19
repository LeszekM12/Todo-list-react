import axios from "axios";
import {Task} from "../../types";

export const getExampleTasks = async () => {
    const response = await axios.get("/Todo-list-react/exampleTasks.json");

    return (response?.data) as Task[];
};