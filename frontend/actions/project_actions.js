/*jshint esversion: 6 */
import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

export const requestProjects = (currentTeam) => {
  return dispatch => {
    return ProjectAPIUtil.fetchProjects(currentTeam)
    .then(projects => {
      return dispatch({
        type: RECEIVE_ALL_PROJECTS,
        projects
      });
    });
  };
};

export const requestProject = (id) => {
  return dispatch => {
    return ProjectAPIUtil.fetchProject(id)
    .then(project => {
      return dispatch({
        type: RECEIVE_PROJECT,
        project
      });
    });
  };
};

export const createProject = (project) => {
  return dispatch => {
    return ProjectAPIUtil.createProject(project)
    .then(project => {
      return dispatch({
        type: RECEIVE_PROJECT,
        project
      });
    });
  };
};

export const updateProject = (project) => {
  return dispatch => {
    return ProjectAPIUtil.updateProject(project)
    .then(project => {
      return dispatch({
        type: RECEIVE_PROJECT,
        project
      });
    });
  };
};

export const deleteProject = (id) => {
  return dispatch => {
    return ProjectAPIUtil.deleteProject(id)
    .then(project => {
      return dispatch({
        type: REMOVE_PROJECT,
        projectId: id
      });
    });
  };
};
