/*jshint esversion: 6 */
export const fetchProjects = (currentTeam) => {
  return ({
    method: `GET`,
    url: `api/teams/${currentTeam.id}/projects`
  });
};

export const fetchProject = (id) => {
  return ({
    method: `GET`,
    url: `api/projects/${id}`
  });
};

export const createProject = (project) => {
  return ({
    method: `POST`,
    url: `api/projects`,
    data: { project }
  });
};

export const updateProject = (project) => {
  return ({
    method: `PATCH`,
    url: `api/projects/${project.id}`,
    data: { project }
  });
};

export const deleteProject = (id) => {
  return ({
    method: `DELETE`,
    url: `api/projects/${id}`
  });
};
