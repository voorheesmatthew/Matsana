import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading-outer">
        <img src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"></img>
      </div>
    );
  }
}

export default withRouter(Loading)
