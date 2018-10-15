/*jshint esversion: 6 */
import { connect } from 'react-redux';

import NavBar from './nav_bar';

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
)(NavBar);
