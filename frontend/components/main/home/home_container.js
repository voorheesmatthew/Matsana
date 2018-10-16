/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { requestProjects, createProject } from '../../../actions/project_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import HomePage from './home';

const mapStateToProps = ({session, entities: { users, teams }}) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    formType: 'project'
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProjects: (currentTeamId) => dispatch(requestProjects(currentTeamId)),
  processForm: (project) => dispatch(createProject(project)),
  newProject: (
    <button onClick={() => dispatch(openModal('project'))}>
      New Project
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
