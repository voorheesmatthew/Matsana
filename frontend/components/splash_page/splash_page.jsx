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
              Matsana helps you organize all the tasks you need to manage for all your projects. Now everyone should know that you are better than them, and who’s more responsible.
            </div>
            <img className="splash-gif" src="https://media.giphy.com/media/IgGEUyl1wfhptgwqe8/source.gif"></img>
          </div>
          <div className="splash-footer">
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashPage)
