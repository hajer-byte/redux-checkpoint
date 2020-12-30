import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button } from "react-bootstrap";
import "../components/component.css";
import { doneTask } from "../JS/actions/ActionTask";
import EditModal from "./EditModal";

const ListItem = () => {
  const items = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <ListGroup className="list d-flex justify-content-start">
      {items.map((el, i) => (
        <Alert variant="light" key={i}>
          <span
            style={
              el.isDone
                ? {
                    width: "78rem",
                    marginLeft: "1rem",
                    display: "flex",
                    alignItems: "flex-end",
                    textDecoration: "line-through",
                    opacity: "0.6",
                  }
                : {
                    width: "78rem",
                    marginLeft: "1rem",
                    display: "flex",
                    alignItems: "flex-end",
                  }
            }
          >
            {el.text}
          </span>
          <div
            style={{
              marginLeft: "1rem",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <EditModal toDo={el} />
            <Button
              variant="outline-danger"
              size="sm"
              style={{ width: "5rem" }}
              onClick={() => {
                dispatch(doneTask(el.payload));
              }}
            >
              {el.isDone ? "undo" : "Complete"}
            </Button>
          </div>
        </Alert>
      ))}
    </ListGroup>
  );
};

export default ListItem;
