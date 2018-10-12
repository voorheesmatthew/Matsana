/*jshint esversion: 6 */
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const parseErrors = (errors) => {
  let objErrors = {};
  for (let i = 0; i < errors.length; i++) {
    let words = errors[i].split(' ');
    objErrors[words[0]] = errors[i];
  }
  return objErrors;
};

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return parseErrors(action.errors);
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
