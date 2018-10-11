import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SplashPage extends React.Component {

  render() {

    return (
      <div>
        <div className="splash-outer">
          <div className="splash-header">
            <div className="splash-header-logo">
              matsana
            </div>
            <div className="splash-header-nav">
              <nav>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </nav>
            </div>
          </div>
          <div className="splash-body">
            <div className="splash-body-title">
              Make more time for the work that matters most
            </div>
            <div className="splash-body-desc">
              Matsana helps you coordinate all the work your team does together. So everyone knows what needs to get done, who’s responsible for doing it, and when it’s due.
            </div>
          </div>
          <div className="splash-footer">
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage)
