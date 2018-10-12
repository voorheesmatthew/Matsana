import React from 'react';
import { Link } from 'react-router-dom';
import { showDropdown } from '../../../app/assets/javascripts/application'



const TopBar = ({ currentUser, logout }) => {


  const inMatsanaTopBar = () => (
    <div className="top-bar-outer">
      <div className="top-bar-contents">
        <div className="top_bar-title">Home</div>
        <div className="dropdown">
          <button onClick={showDropdown} className="top-bar-name-btn">{currentUser.name.split("")[0]}</button>
          <div id="top-bar-dropdown" className="top-bar-dropdown-list">
            <div><button className="top-bar-logout" onClick={logout}>Log Out</button></div>
          </div>
        </div>
      </div>
    </div>
  );

  // return currentUser ? inMatsanaBar() : welcomeBar();
  return currentUser ? inMatsanaTopBar() : null;
};


export default TopBar;
