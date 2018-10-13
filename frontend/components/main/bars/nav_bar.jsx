import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser }) => {


  const inMatsanaNavBar = () => (
    <div className="nav-outer">
      <div className="nav-header">
          matsana
      </div>

      <div className="nav-bar-contents">
        <div className="nav-sections">
          <div>Home</div>
          <div>Tasks</div>
        </div>
        <div className="nav-projects">
          <ul>projects
            <li>Fullstack</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
            <li>Another Project</li>
          </ul>
        </div>
      </div>
      <div className="nav-footer">
        LinkedIn Github Etc
      </div>
    </div>
  );

  // return currentUser ? inMatsanaBar() : welcomeBar();
  return currentUser ? inMatsanaNavBar() : null;
};


export default NavBar;
