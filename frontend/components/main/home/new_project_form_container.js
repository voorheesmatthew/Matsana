/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';
import NewProjectForm from './new_project_form';

const mapStateToProps = ({session, entities: { users, teams }}) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    formType: 'New Project'
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (project) => dispatch(createProject(project)),
  closeModal: () => dispatch(closeModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
