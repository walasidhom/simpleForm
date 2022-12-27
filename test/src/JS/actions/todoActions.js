import { ADD_TODO, DELETE_TODO, FINISH_TODO } from "../actionTypes/todoActionTypes";

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: task
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};
export const finishTodo = (id) => {
    return {
        type: FINISH_TODO,
        payload : id
    }
}