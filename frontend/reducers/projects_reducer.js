/*jshint esversion: 6 */
import merge from 'lodash/merge';
import { RECEIVE_ALL_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return  action.projects;
    case RECEIVE_PROJECT:
    // debugger
      return merge({}, oldState, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
      const newState = merge({}, oldState);
      delete newState[action.projectId];
      return newState;
    case LOGOUT_CURRENT_USER:
    // debugger
      return {};
    default:
      return oldState;
  }
};

export default projectsReducer;
