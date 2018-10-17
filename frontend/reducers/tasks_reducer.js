/*jshint esversion: 6 */
import merge from 'lodash/merge';
import { RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
} from '../actions/task_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return  action.tasks;
    case RECEIVE_TASK:
      return merge({}, oldState, {[action.task.id]: action.task});
    case REMOVE_TASK:
      const newState = merge({}, oldState);
      delete newState[action.taskId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default tasksReducer;
