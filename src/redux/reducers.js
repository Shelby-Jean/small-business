import { combineReducers } from 'redux';
import initialState from './state';

const loggedIn = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
}

const user = (state = null) => state

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.value];
    case "REMOVE_BUSINESS":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
}

export default combineReducers({ loggedIn, user, businesses })