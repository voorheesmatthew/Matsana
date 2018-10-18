/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestTasks, updateTask, createTask, deleteTask } from '../../../actions/task_actions';
import Tasks from './tasks';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.userId],
    currentTeam: state.entities.teams[state.session.currentTeamId],
    tasks: state.entities.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks));
