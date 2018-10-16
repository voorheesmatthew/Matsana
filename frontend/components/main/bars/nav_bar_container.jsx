/*jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users, projects } }) => {
  return {
    currentUser: users[session.userId],
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
