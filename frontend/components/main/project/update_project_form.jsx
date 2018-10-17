import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class UpdateProjectForm extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      id: parseInt(this.props.location.pathname.slice(1)),
      project_name: undefined,
      team_id: this.props.currentTeamId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
    this.setState({
      project_name: this.props.projects[this.state.id].project_name
    })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const project = Object.assign({}, this.state);
    // debugger
    this.props.processForm(project).then(action => {
      this.props.closeModal();
    });
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
                      value="Update Project"
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

export default withRouter(UpdateProjectForm)
