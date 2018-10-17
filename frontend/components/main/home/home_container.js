/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { requestProjects } from '../../../actions/project_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import HomePage from './home';

const mapStateToProps = ({session, entities: { users, projects }}) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    formType: 'project',
    projects: projects
  };
};

const mapDispatchToProps = dispatch => ({
  newProjectButton: (
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
