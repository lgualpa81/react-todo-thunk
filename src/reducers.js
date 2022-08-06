import { combineReducers } from "redux";

const INITIAL_STATE = {
  todo: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: action.payload };
    case "DELETE_DATA":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const reducers = combineReducers({
    data: dataReducer
});
