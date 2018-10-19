/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { updateProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';
import UpdateProjectForm from './update_project_form';

const mapStateToProps = ({session, entities: { users, teams, projects }}) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    formType: 'Update Project',
    projects
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (project) => dispatch(updateProject(project)),
  closeModal: () => dispatch(closeModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProjectForm);
