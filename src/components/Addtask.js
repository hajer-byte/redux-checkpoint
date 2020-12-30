import React, { useState } from "react";
import "../components/component.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { addTask } from "../JS/actions/ActionTask";
import { useDispatch } from "react-redux";

const Addtask = () => {
  const [myInput, setMyInput] = useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    dispatch(addTask({ text: myInput, id: Date.now(), isDone: false }));
    setMyInput("");
  };
  return (
    <form onSubmit={add}>
      <h1 className="title">What needs to be done?</h1>
      <div className="input rounded">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="add a new task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={myInput}
            onChange={(e) => {
              setMyInput(e.target.value);
            }}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={add}>
              add Task
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </form>
  );
};

export default Addtask;
