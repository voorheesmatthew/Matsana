/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestProjects } from '../../../actions/project_actions';

import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users, teams, projects } }) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId,
    homeLink: <Link to="/home">Home</Link>,
    projects: projects
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
