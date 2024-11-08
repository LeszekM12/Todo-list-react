import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header/index.tsx";
import Container from "../../../common/Container/styled.tsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id)); 

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

export default TaskPage;
