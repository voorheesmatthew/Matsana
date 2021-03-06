import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';



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
    this.showLoadingPage = this.showLoadingPage.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  showLoadingPage() {
    this.props.history.push(`/loading`)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.showLoadingPage();
    });
    setTimeout(() => {
      if (this.props.history.location.pathname === '/loading') {
        this.props.history.push("/")
      } else {
        this.props.history.push(this.props.history.location.pathname)
      }
    }, 3500);
  }

  renderErrors() {
    let errors = Object.values(this.props.errors)
    return(
      <ul className="session-errors-ul">
        {errors.map((error, i) => (
          <li key={`error${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestUserLogin(e) {
    e.preventDefault();
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
      <div>
      <div className="session-outer">
        <div className="session-header">
          <Link to="/" className="session-header">matsana</Link></div>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif" className="session-logo"></img>
        <div className="session-form-container">
          <div className="session-form-content">
            <div className="session-form-elements">
              <h1 className="session-form-type">{this.props.formType}</h1>
              <div>{guestButton}</div>
              <div className="session-divider">{divider}</div>
              <form onSubmit={this.handleSubmit} className="session-form">
                {
                  (this.props.formType === "Log In")
                  ? <div>{this.renderErrors()}</div>
                  : null
                }
                <div className="session-form-inputs">

                  {
                    (this.props.formType === "Log In")
                    ? <div></div>
                    : <label >Full Name: <span className="session-errors-su">{this.props.errors.Name}</span><br/>
                      <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        className="session-input"
                        />
                    </label>
                  }
                  <br/>
                  <label> Email Address: <span className="session-errors-su">{this.props.errors.Email}</span><br/>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="session-input"
                      />
                  </label>
                  <br/>
                  <label> Password: <span className="session-errors-su">{this.props.errors.Password}</span><br/>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="session-input"
                      />
                  </label>
                  <br/>
                  <div
                    className="session-submit-container">
                    <input
                      id='login'
                      className="session-submit"
                      type="submit"
                      value={this.props.formType}
                      />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="session-footer">
          {
            (this.props.formType === "Log In")
            ? <span>Don't have an account? <span className ="session-switch">{this.props.navLink}</span></span>
            : <span>Already signed up? <span className ="session-switch">{this.props.navLink}</span></span>
          }
        </div>
      </div>

      </div>
    );
  }
}

export default withRouter(SessionForm)
