/*jshint esversion: 6 */
import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_CURRENT_TEAM } from '../actions/team_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {userId: action.currentUser.id});
    case RECEIVE_CURRENT_TEAM:
      return merge({}, oldState, {currentTeamId: action.team.id});
    case LOGOUT_CURRENT_USER:
      return {userId: null};
    default:
      return oldState;
  }
};

export default sessionReducer;
