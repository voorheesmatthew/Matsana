import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class NewProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectName: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
                      value={this.state.projectName}
                      onChange={this.update('projectName')}
                      className="project-input"
                      />
                  </label>
                  <br/>
                  <div
                    className="project-submit-container">
                    <input
                      className="project-submit"
                      type="submit"
                      value={this.props.formType}
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
