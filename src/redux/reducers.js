import { combineReducers } from 'redux';

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
}

const user = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value
    default:
      return state
  }
}

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const newState = [...state];
      const filteredState = newState.filter(listing => listing.id !== action.value);
      return filteredState;
    default:
      return state;
  }
}

export default combineReducers({ isLoggedIn, user, listings })