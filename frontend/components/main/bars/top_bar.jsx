import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMainDropdownOpen: false,
      isProjectDropdownOpen: false
    }
    this.toggleMainDropdown = this.toggleMainDropdown.bind(this);
    this.toggleProjectDropdown = this.toggleProjectDropdown.bind(this);
    this.leftHalf = this.leftHalf.bind(this);
    this.destroyProject = this.destroyProject.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
    this.assignColor = this.assignColor.bind(this);

  }

  assignColor() {
    const colors = ['#e362e3', '#ea4e9d', '#7a6ff0', '#4186e0', '#aa62e3']
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    return {color: `${randColor}`};
  }

  componentWillMount() {
    this.props.fetchTeams(this.props.currentUser)
  }

  navigateToHome() {
    this.props.history.push(`/`);
  }

  toggleMainDropdown() {
    this.setState({
      isMainDropdownOpen: !this.state.isMainDropdownOpen
    })
  }

  toggleProjectDropdown() {
    this.setState({
      isProjectDropdownOpen: !this.state.isProjectDropdownOpen
    })
  }

  destroyProject() {
    this.props.deleteProject(parseInt(this.props.match.params.project));
    this.navigateToHome();
  }

  leftHalf() {
    if (this.props.match.path === "/home") {
      return (
        <div className="top-bar-left">
          <div className="top_bar-title">
            Home
          </div>
        </div>
      );
    } else {
      const id = parseInt(this.props.match.params.project)
      const name = this.props.projects[id] ?
      this.props.projects[id].project_name
      : "nope"
      return (
        <div className="top-bar-left">
          <div className="top_bar-title" style={this.assignColor()}>
            {`${name}`}
          </div>
          <div className="dropdown">
            <button onClick={this.toggleProjectDropdown}
            className="top-bar-project-btn">
              ...
            </button>

            <div
              id="top-bar-dropdown-project"
              className={this.state.isProjectDropdownOpen ? "top-bar-dropdown-list-project" : "dropdown-hidden"}>
              <div>
                {this.props.editProjectButton}
                <button
                  className="top-bar-delete"
                  onClick={this.destroyProject}>
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      );
    }
  }

  render() {

    return (
      <div className="top-bar-outer top-right">
        <div className="top-bar-contents">
          {this.leftHalf()}
          <div className="dropdown">

            <button
              onClick={this.toggleMainDropdown}
              className="top-bar-name-btn">
              {this.props.currentUser.name.split("")[0]}
            </button>

            <div
              id="top-bar-dropdown"
              className={this.state.isMainDropdownOpen ? "top-bar-dropdown-list" : "dropdown-hidden"}>
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
