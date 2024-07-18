import axios from "axios";

export const getExampleTasks = async () => {
    const response = await axios.get("/Todo-list-react/exampleTasks.json");

    return response;
};