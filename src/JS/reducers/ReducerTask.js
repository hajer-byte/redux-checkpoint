import { ADD_TASK, DONE_TASK, EDIT_TASK } from "../actionsTypes/Constants";
const initialState = {
  list: [],
};

const ReducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, list: [action.payload, ...state.list] };
    case DONE_TASK:
      return {
        state,
        list: state.list.map((el) =>
          el.payload === action.payload ? { ...el, isDone: !el.isDone } : state
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    default:
      return state;
  }
};

export default ReducerTask;
