/*jshint esversion: 6 */
export const fetchProjectsUsers = (team) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${team.id}/projects_users`
  });
};

export const fetchProjectUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects_users/${id}`
  });
};

export const createProjectUser = (projectUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects_users`,
    data: { projectUser }
  });
};


export const deleteProjectUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects_users/${id}`
  });
};
