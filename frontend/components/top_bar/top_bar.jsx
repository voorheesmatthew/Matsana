import React from 'react';
import { Link } from 'react-router-dom';



const TopBar = ({ currentUser, logout }) => {
  const welcomeBar = () => (
    <hgroup welcome-="welcome-header-group">
      <div className="welcome-top-bar">
        <nav className="welcome-login-signup">
          <Link to="/login" className="welcome-login">Login</Link>
          <Link to="/signup" className="welcome-signup">Sign Up</Link>
        </nav>
      </div>
    </hgroup>
  );

  const inMatsanaBar = () => (
    <hgroup className="top-header-group">
      <div className="top-bar">
        <h2 className="top-header-name">Hi, {currentUser.name}!</h2>
        <button className="top-header-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? inMatsanaBar() : welcomeBar();
};


export default TopBar;
