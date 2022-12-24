import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
} from "../actionTypes/todoActionTypes.js";

const initialstate = {
  taskList: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Finish my Homeworks", completed: false },
    { id: 3, text: "watch the match", completed: false },
  ],
};

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      // return { state, action : { type, payload } }
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    case FINISH_TODO:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
