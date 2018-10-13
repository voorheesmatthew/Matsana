import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'

import NavBarContainer from './bars/nav_bar_container';
import TopBarContainer from './bars/top_bar_container';
import HomePage from './home/home';

const MainPage = () => (
  <div className="main-outer">
    <div id="left" className="column">
      <NavBarContainer/>
    </div>
    <div id="right" className="column">
      <TopBarContainer/>
      <HomePage/>
    </div>
  </div>
)

export default MainPage;
