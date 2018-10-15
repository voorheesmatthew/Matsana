/*jshint esversion: 6 */
import { connect } from 'react-redux';

import { requestTeams } from '../../actions/team_actions';
import MainPage from './main';

const mapStateToProps = ({ session, entities: { users, teams } }) => {
  return {
    currentUser: users[session.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTeams: (currentUser) => dispatch(requestTeams(currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
