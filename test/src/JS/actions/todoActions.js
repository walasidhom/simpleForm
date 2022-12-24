import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
} from "../actionTypes/todoActionTypes.js";

// function that returns an object : { type, payload}
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const finishTodo = (id) => {
  return {
    type: FINISH_TODO,
    payload: id,
  };
};
