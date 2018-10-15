/*jshint esversion: 6 */
import { connect } from 'react-redux';

import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users, teams } }) => {
  return {
    currentUser: users[session.userId],
    currentTeam: teams[session.currentTeamId]
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
