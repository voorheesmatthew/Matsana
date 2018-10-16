import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project_name: '',
      team_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentDidMount() {
    this.setState({
      team_id: this.props.currentTeamId
    })
  }

  navigateToShow(id) {
    this.props.history.push(`/${id}`);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.processForm(project);
    this.props.closeModal();
    this.navigateToShow(project.id);
  }

  render() {

    return (
      <div>
        <div className="project-outer">
          <div className="project-form-content">
            <div className="project-form-elements">
              <h1 className="project-form-type">{this.props.formType}</h1>
              <form onSubmit={this.handleSubmit} className="project-form">
                <div className="project-form-inputs">
                  <label> Project Name:<br/>
                    <input
                      type="text"
                      value={this.state.project}
                      onChange={this.update('project_name')}
                      className="project-input"
                      />
                  </label>
                  <br/>
                  <div
                    className="project-submit-container">
                    <input
                      className="project-submit"
                      type="submit"
                      value="Create Project"
                      />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewProjectForm)
