/*jshint esversion: 6 */
import merge from 'lodash/merge';
import { RECEIVE_ALL_TEAMS,
  RECEIVE_TEAM,
  REMOVE_TEAM,
} from '../actions/team_actions';

const teamsReducer = (oldState = {}, action) => {
  // debugger;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_TEAMS:
      return merge({}, oldState, action.teams);
    case RECEIVE_TEAM:
      return merge({}, oldState, {[action.team.id]: action.team});
    case REMOVE_TEAM:
      const newState = merge({}, oldState);
      delete newState[action.teamId];
      return newState;
    default:
      return oldState;
  }
};

export default teamsReducer;
