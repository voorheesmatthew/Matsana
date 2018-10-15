/*jshint esversion: 6 */
import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_ALL_TEAMS = "RECEIVE_ALL_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const RECEIVE_TEAM_ERRORS = "RECEIVE_TEAM_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

// TODO: Build in team errors

export const requestTeams = (currentUser) => {
  return dispatch => {
    return TeamAPIUtil.fetchTeams(currentUser)
    .then(teams => {
      return dispatch({
        type: RECEIVE_ALL_TEAMS,
        teams
      });
    });
  };
};

export const requestTeam = (id) => {
  return dispatch => {
    return TeamAPIUtil.fetchTeam(id)
    .then(team => {
      return dispatch({
        type: RECEIVE_TEAM,
        team
      });
    });
  };
};

export const createTeam = (team) => {
  return dispatch => {
    return TeamAPIUtil.createTeam(team)
    .then(team => {
      return dispatch({
        type: RECEIVE_TEAM,
        team
      });
    });
  };
};

export const updateTeam = (team) => {
  return dispatch => {
    return TeamAPIUtil.updateTeam(team)
    .then(team => {
      return dispatch({
        type: RECEIVE_TEAM,
        team
      });
    });
  };
};

export const deleteTeam = (id) => {
  return dispatch => {
    return TeamAPIUtil.deleteTeam(id)
    .then(team => {
      return dispatch({
        type: REMOVE_TEAM,
        teamId: id
      });
    });
  };
};
