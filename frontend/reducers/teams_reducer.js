/*jshint esversion: 6 */
import merge from 'lodash/merge';
import { RECEIVE_ALL_TEAMS,
  RECEIVE_TEAM,
  REMOVE_TEAM,
} from '../actions/team_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const teamsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return merge({}, oldState, action.teams);
    case RECEIVE_TEAM:
      return merge({}, oldState, {[action.team.id]: action.team});
    case RECEIVE_CURRENT_USER:
    // TODO: bug here or in sessionReducer
      return merge({}, oldState, {[action.currentTeam.id]: action.currentTeam});
    case REMOVE_TEAM:
      const newState = merge({}, oldState);
      delete newState[action.teamId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default teamsReducer;
