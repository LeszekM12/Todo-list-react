import {useState, useRef, FormEventHandler} from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onFormSubmit: FormEventHandler<HTMLFormElement>  = (event) => {
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;
    }

    dispatch(addTask({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current!.focus()
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;
