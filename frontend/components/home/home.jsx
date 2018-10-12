import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div className="home-outer">Your home page</div>
    );
  }
}

export default withRouter(HomePage)
