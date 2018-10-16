/*jshint esversion: 6 */
import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_TEAM
} from '../actions/session_actions';
// import { RECEIVE_CURRENT_TEAM } from '../actions/team_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = {
        userId: action.currentUser.id,
        currentTeamId: action.currentTeam.id
      };
      return merge({}, oldState, newState);
    case RECEIVE_CURRENT_TEAM:
      return merge({}, oldState, {currentTeamId: action.currentTeam.id});
      // TODO: bug here or in teamsReducer
    case LOGOUT_CURRENT_USER:
      return {userId: null, currentTeamId: null};
    default:
      return oldState;
  }
};

export default sessionReducer;
