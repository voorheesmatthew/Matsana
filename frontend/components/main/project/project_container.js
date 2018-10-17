/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { requestProject, updateProject, deleteProject } from '../../../actions/project_actions';
import Project from './project';
// TODO: Add tasks

const mapStateToProps = ({session, entities: { users, projects }}) => {
  return {
    currentUser: users[session.userId],
    projects
  };
};

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
