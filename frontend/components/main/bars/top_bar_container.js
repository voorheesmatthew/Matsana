/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';

import { logout, requestCurrentTeam } from '../../../actions/session_actions';
import { requestTeams } from '../../../actions/team_actions';
import { deleteProject } from '../../../actions/project_actions';
import TopBar from './top_bar';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users, teams, projects } }) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    projects: projects
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTeams: (currentUser) => dispatch(requestTeams(currentUser)),
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  logout: () => dispatch(logout()),
  fetchCurrentTeam: (currentTeamId) => dispatch(requestCurrentTeam(currentTeamId)),
  editProjectButton: (
    <button className="top-bar-edit" onClick={() => dispatch(openModal('updateProject'))}>
      Edit
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
