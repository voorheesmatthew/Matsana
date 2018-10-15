/*jshint esversion: 6 */
export const fetchTeams = (currentUser) => {
  return ({
    method: 'GET',
    url: `api/users/${currentUser.id}/teams`
  });
};

export const fetchTeam = (id) => {
  return ({
    method: 'GET',
    url: `api/teams/${id}`
  });
};

export const createTeam = (team) => {
  return ({
    method: 'POST',
    url: `api/teams`,
    data: { team }
  });
};

export const updateTeam = (team) => {
  return ({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};

export const deleteTeam = (id) => {
  return ({
    method: 'DELETE',
    url: `api/teams/${id}`
  });
};
