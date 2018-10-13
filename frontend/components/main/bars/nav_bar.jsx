import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-outer">
        <div className="nav-header top-left">
          matsana
        </div>

        <div className="nav-bar-contents">
          <div className="nav-sections">
            <div>Home</div>
            <div>Tasks</div>
          </div>
          <div className="nav-projects">
            <ul>projects
              <li>Fullstack</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
              <li>Another Project</li>
            </ul>
          </div>
        </div>
        <div className="nav-footer">
          LinkedIn Github Etc
        </div>
      </div>
    );
  }




}

export default withRouter(NavBar);
