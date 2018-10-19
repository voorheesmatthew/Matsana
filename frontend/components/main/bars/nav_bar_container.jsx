/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { requestProjects } from '../../../actions/project_actions';

import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.userId],
    currentTeamId: state.session.currentTeamId,
    homeLink: <Link to="/home" className={ownProps.match.path === "/home" ? "proj-selected" : null }>Home</Link>,
    tasksLink: <Link to="/tasks" className={ownProps.match.path === "/tasks" ? "proj-selected" : null }>Tasks</Link>,
    projects: state.entities.projects
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
