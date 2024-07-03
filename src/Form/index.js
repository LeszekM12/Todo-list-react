import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
        onClick={() => inputRef.current.focus()}>
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;
