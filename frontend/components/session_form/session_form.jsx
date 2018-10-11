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
    this.guestUserLogin = this.guestUserLogin.bind(this);
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

  guestUserLogin() {
    this.setState({
      email: 'travis@veryrice.com',
      password: 'snwbrdng'
    }, () => document.getElementById('login').click())
  }

  render() {

    let guestButton;
    let divider;
    if (this.props.formType === 'Log In') {
      guestButton = <button onClick={this.guestUserLogin} className="session-guest-button">
        Use Guest Account
      </button>
      divider = <div className="session-login-seperator">
        or
      </div>
    }
    return (
      <div className="session-form-outer">
        <div className="session-form-container">
          <div className="session-form-content">
            <div className="session-form-elements">
              <h1 className="session-form-type">{this.props.formType}</h1>
              <div>{guestButton}</div>
              <div>{divider}</div>
              <form onSubmit={this.handleSubmit} className="session-form">
                <div className="session-form-inputs">

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
                  <br/>
                  <input
                    id='login'
                    className="session-submit"
                    type="submit"
                    value={this.props.formType}
                    />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm)
