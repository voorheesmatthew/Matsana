import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom'

import NavBarContainer from './bars/nav_bar_container';
import TopBarContainer from './bars/top_bar_container';
import HomeContainer from './home/home_container';

class MainPage extends React.Component {

  componentDidMount() {
    this.props.fetchTeams(this.props.currentUser)
  }

  render() {
    return (
      <div className="main-outer">
        <div id="left" className="column">
          <NavBarContainer/>
        </div>
        <div id="right" className="column">
          <TopBarContainer/>
          <HomeContainer/>
        </div>
      </div>
    );
  }
}
// const MainPage = () => (
//   <div className="main-outer">
//     <div id="left" className="column">
//       <NavBarContainer/>
//     </div>
//     <div id="right" className="column">
//       <TopBarContainer/>
//       <HomeContainer/>
//     </div>
//   </div>
// )

export default withRouter(MainPage);
