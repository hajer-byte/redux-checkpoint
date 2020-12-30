import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import { editTask } from "../JS/actions/ActionTask";

const EditModal = ({ toDo }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(toDo.text);
  const toggleModal = () => {
    setShow(!show);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...toDo, text: text };
    editTask(newTask);
    toggleModal();
  };
  return (
    <div>
      <Button
        variant="outline-secondary"
        size="sm"
        style={{
          marginRight: "0.2em",
          width: "5rem",
        }}
        onClick={toggleModal}
      >
        Edit
      </Button>
      <Modal isOpen={show} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            confirm
          </button>
          <button onClick={toggleModal}>cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
