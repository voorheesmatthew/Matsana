/*jshint esversion: 6 */
export const fetchTeamsUsers = (currentUser) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${currentUser.id}/teams_users`
  });
};

export const fetchTeamUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams_users/${id}`
  });
};

export const createTeamUser = (teamUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/teams_users`,
    data: { teamUser }
  });
};


export const deleteTeamUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams_users/${id}`
  });
};
