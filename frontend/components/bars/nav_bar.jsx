import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser }) => {


  const inMatsanaNavBar = () => (
    <div className="nav-outer">
      <div className="nav-bar-contents">
        <div className="nav-header">
        </div>
        <div className="nav-sections">
        </div>
        <div className="nav-projects">
        </div>
        <div className="nav-footer">
        </div>
      </div>
    </div>
  );

  // return currentUser ? inMatsanaBar() : welcomeBar();
  return currentUser ? inMatsanaNavBar() : null;
};


export default NavBar;
