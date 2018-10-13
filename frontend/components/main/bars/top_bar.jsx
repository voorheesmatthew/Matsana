import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openDropdown: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    // this.setState({
    //   openDropdown: !this.state.openDropdown
    // })
  }

  render() {

    return (
      <div className="top-bar-outer top-right">
        <div className="top-bar-contents">

          <div className="top_bar-title">
            Home
          </div>

          <div className="dropdown">

            <button
              onClick={this.toggleDropdown()}
              className="top-bar-name-btn">
              {this.props.currentUser.name.split("")[0]}
            </button>

            <div
              id="top-bar-dropdown"
              className="top-bar-dropdown-list">
              <div>
                <button
                  className="top-bar-logout"
                  onClick={this.props.logout}>
                  Log Out
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    );

  }

}
export default withRouter(TopBar);
