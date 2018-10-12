import React from 'react';
import { Link } from 'react-router-dom';



const TopBar = ({ currentUser, logout }) => {
  

  const inMatsanaBar = () => (
    <hgroup className="top-header-group">
      <div className="top-bar">
        <h2 className="top-header-name">Hi, {currentUser.name}!</h2>
        <button className="top-header-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  // return currentUser ? inMatsanaBar() : welcomeBar();
  return currentUser ? inMatsanaBar() : null;
};


export default TopBar;
