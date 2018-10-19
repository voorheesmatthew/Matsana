/*jshint esversion: 6 */
import * as APIUtil from '../util/session_api_util';

import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS ="CLEAR_ERRORS";

export const RECEIVE_CURRENT_TEAM = "RECEIVE_CURRENT_TEAM";

export const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: payload.user,
    currentTeam: payload.team
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const requestCurrentTeam = (id) => {
  return dispatch => {
    return TeamAPIUtil.fetchTeam(id)
    .then(team => {
      return dispatch({
        type: RECEIVE_CURRENT_TEAM,
        team
      });
    });
  };
};
