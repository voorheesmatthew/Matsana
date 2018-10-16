/*jshint esversion: 6 */
import { connect } from 'react-redux';

import { requestTeams } from '../../../actions/team_actions';
import HomeWrapper from './home_wrapper';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWrapper);
