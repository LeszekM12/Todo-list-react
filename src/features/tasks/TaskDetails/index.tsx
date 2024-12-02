import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header/index";
import Container from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import {TasksState} from "../../../types";

function TaskDetails() {
  const { id } = useParams();
  const task = useSelector((state: {tasks: TasksState })=> getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono szczegółów zadania😥"} 
        body={!!task && (
            <> 
              Ukończone:<strong>{task.done ? "Tak" : "Nie"}</strong>
            </>
        )} 
      />
    </Container>
  );
}

export default TaskDetails;
