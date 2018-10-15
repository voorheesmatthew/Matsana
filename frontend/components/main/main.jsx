import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'

import NavBarContainer from './bars/nav_bar_container';
import TopBarContainer from './bars/top_bar_container';
import HomeContainer from './home/home_container';

const MainPage = () => (
  <div className="main-outer">
    <div id="left" className="column">
      <NavBarContainer/>
    </div>
    <div id="right" className="column">
      <TopBarContainer/>
      <HomeContainer/>
    </div>
  </div>
)

export default MainPage;
