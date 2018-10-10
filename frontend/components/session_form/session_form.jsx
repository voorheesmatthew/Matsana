import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-modal-container">
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <div className="session-form">

            {
              (this.props.formType === "Log In")
              ? <div></div>
              : <label >Full Name<br/>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="session-input"
                  />
              </label>
            }
            <br/>
            <label> Email Address<br/>
              <input
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
                />
            </label>
            <br/>
            <label> Password<br/>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
                />
            </label>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm)
