/*jshint esversion: 6 */
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};
