/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { requestTeams } from '../../../actions/team_actions';
import HomePage from './home';

const mapStateToProps = ({session, entities: {users}}) => {
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
)(HomePage);
