/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestProject, updateProject, deleteProject } from '../../../actions/project_actions';
import { requestTasks, updateTask } from '../../../actions/task_actions';
import Project from './project';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.userId],
    currentTeam: state.entities.teams[state.session.currentTeamId],
    project: state.entities.projects[parseInt(ownProps.match.params.project)],
    tasks: state.entities.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: (task) => dispatch(updateTask(task)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Project));
