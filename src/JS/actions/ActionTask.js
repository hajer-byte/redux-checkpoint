import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../actionsTypes/Constants";

export const addTask = (payload) => {
  //will have the {id , isDone, text} structure
  return {
    type: ADD_TASK,
    payload
  };
};
export const doneTask = (id) => {
  return {
    type: DONE_TASK,
    payload: id
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload
  };
};