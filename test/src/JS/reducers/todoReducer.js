import { ADD_TODO, FINISH_TODO , DELETE_TODO } from '../actionTypes/todoActionTypes';

const initialstate = {
  Tasks: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Finish my Homeworks", completed: false },
    { id: 3, text: "watch the match", completed: false }
  ]
}

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, Tasks: [
          ...state.Tasks, action.payload
        ]
      };
    
    case DELETE_TODO:
      return {
        ...state,
        Tasks: state.Tasks.filter((task) => task.id !== action.payload),
      };
    
    case FINISH_TODO:
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    
      
      
  
    default:
      return state;
  }
}


  export default todoReducer;